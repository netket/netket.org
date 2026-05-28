---
title: "NetKet 3.22 Highlights"
date: 2026-05-27T00:00:00+01:00
draft: true
author: Filippo Vicentini
math: true
---

We are proud to announce the release of **NetKet 3.22**, which is a remarkably large release including a lot off new features arising from research done by Ph.D. students and Postdocs working with NetKet. 
In particular, we now have new MCMC convergence-diagnostic tools, multi-GPU SR solvers, richer symmetry utilities, and much more.

We would like to highlight the following features, which are discussed below, but the (quite long) full list of changes is in the [CHANGELOG](https://netket.readthedocs.io/en/latest/changelog.html).


1. [MCMC thermalisation and convergence diagnostics](#mcmc-convergence-diagnostics)
2. [Symmetry toolkit extensions](#symmetry-toolkit-extensions)
3. [A new, structured callback system](#a-new-structured-callback-system)
4. [Improvements to SR and linear solvers](#improvements-to-sr-and-linear-solvers)
5. [Delta-method error propagation for nonlinear observables](#delta-method-error-propagation-for-nonlinear-observables)
6. [Stable observables](#stable-observables)
7. [EmbedOperator for composite systems](#embedoperator-for-composite-systems)
8. [Logging enhancements](#logging-enhancements)


---

## MCMC thermalisation and convergence diagnostics

Two common pain points with NetKet have long been the absence of a simple way to thermalise Markov Chains, and a simple way to verify if a MCMC integration is converged.

NetKet 3.22 addresses this shortcoming by adding three new _high level_ tools: `MCState.thermalise`, `MCState.check_mc_convergence` and `MCState.expect_to_precision`. 
Those are all built on top of a jax-compatible single-pass statistical accumulator [`stats.online_statistics`](https://netket.readthedocs.io/en/latest/api/_generated/stats/netket.stats.online_statistics.html), which computes the mean, variance, standard error, Gelman-Rubin $\hat{R}$, and integrated autocorrelation time $\tau_\text{corr}$ in a single streaming pass without storing raw samples.

### `MCState.thermalise` — adaptive chain warm-up

[`MCState.thermalise`](https://netket.readthedocs.io/en/latest/api/_generated/vqs/netket.vqs.MCState.html#netket.vqs.MCState.thermalise) advances the chains until they are well mixed according to the $\hat{R}$ indicator.
If they fail to mix in a given budget, a warning is raised.

This is useful when creating a new variational state with specific parameters, for example, after initialising from a known ansatz or setting parameters obtained elsewhere, in order to mix the randomly initialized chains.


### `MCState.check_mc_convergence` — long-chain diagnostic

[`MCState.check_mc_convergence`](https://netket.readthedocs.io/en/latest/api/_generated/vqs/netket.vqs.MCState.html#netket.vqs.MCState.check_mc_convergence) runs long Markov chains and reports $\hat{R}$ and $\tau_\text{corr}$, together with a recommended suggested `sweep_size`.
You can optionally pass `plot=True` to get a diagnostic figure with trace plots and autocorrelation functions.

As NetKet defaults to a `sweep_size=hilbert.size`, which is sometimes quite a large overestimate, this can be very useful to lower your sampling budget.

Together, the two methods allow a clean post-optimisation workflow:
```python
import netket as nk

# Construct a variational state with specific parameters (not yet thermalised)
vstate = nk.vqs.MCState(
    sampler, model, n_samples=4096,
    variables=optimised_params,
)

# Warm up the chains until R_hat < 1.05
vstate.thermalise(H)

# Run a long diagnostic to confirm mixing and get tau_corr
result = vstate.check_mc_convergence(H, n_samples=50_000)
# R_hat = 1.001, tau_corr = 4.2, recommended sweep_size >= 9
```

### `MCState.expect_to_precision` — precise expectation values

[`MCState.expect_to_precision(operator, [rtol/atol])`](https://netket.readthedocs.io/en/latest/api/_generated/vqs/netket.vqs.MCState.html#netket.vqs.MCState.expect_to_precision) draws samples iteratively until the estimated standard error of $\langle O \rangle$ satisfies user-specified absolute (`atol`) and relative (`rtol`) tolerances:

```python
energy = vstate.expect_to_precision(H, rtol=1e-3)
# stopped after 32768 samples; σ/|E| = 8.7e-4
```

---

## Symmetry toolkit extensions

NetKet 3.22 adds several utilities that make it easier to work with symmetry groups and to build symmetry-projected states. 
For example, it's now extremely simple to iteratively simmetrize an NQS, even if it already is already partly simmetric.

### Spin-flip symmetry

[`netket.operator.SpinFlipOperator`](https://netket.readthedocs.io/en/latest/api/_generated/operator/netket._src.operator.spin_flip.SpinFlipOperator.html) represents the global spin-flip transformation on spin and spinful fermionic Hilbert spaces.
[`netket.symmetry.spin_flip_representation`](https://netket.readthedocs.io/en/latest/api/_generated/symmetry/netket.symmetry.spin_flip_representation.html) builds the corresponding even/odd parity-sector projectors:

```python
hi = nk.hilbert.Spin(s=0.5, N=10)
flip_rep = nk.symmetry.spin_flip_representation(hi, parity=+1)  # even sector
vstate_sym = flip_rep.project(vstate)
```

### Coset filters for iterative symmetrisation

One often wants to simmetrize a variational state that is already partly simmetrized. The typical example is a patched transformer which is invariant under patch translations but not sub-patch translations.

The new *coset filter* infrastructure allows to 'complete' the simmetrization of a partly simmetrized state.
Given a subgroup $H<G$ of a larger simmetry group $G$ (like patch-simmetries inside of translation simmetries), one can apply the coset filter $F_C$ (only $|G|/|H|$ additional terms) to reach the full $G$-symmetric sector:

$$P_G(\rho) = F_C(\rho) \circ P_H(\rho|_H)$$

Coset filters are obtained via `.coset_filter(sub_rep)` on a `TranslationRepresentation`.
A typical use case is a patched ViT, which is already equivariant under inter-patch translations $T_2$ (stride = patch size) by construction. Only the $T_1/T_2$ coset — two forward passes — is needed to reach full $T_1$ symmetry:

```python
patch_size = 2
lattice = nk.graph.Chain(L, pbc=True)

G = nk.symmetry.canonical_representation(hi, lattice.translation_group())
H = nk.symmetry.canonical_representation(hi, lattice.translation_group(strides=patch_size))

# A patched ViT is naturally H-invariant
vstate = nk.vqs.MCState(sampler, PatchViT(), n_samples=4096)

# By applying the refinement operator we can make it G-invariant
C = G.coset_filter(H)
Π₀ = C.projector_refinement(k=0)
vstate_sym = nk.vqs.apply_operator(Π₀, vstate)
```

### Other additions

- [`netket.symmetry.group.cyclic_group`](https://netket.readthedocs.io/en/latest/api/_generated/symmetry/netket.symmetry.group.cyclic_group.html) — convenience constructor for cyclic permutation groups.
- [`Lattice.distances_euclidean`](https://netket.readthedocs.io/en/latest/api/_generated/graph/netket.graph.Lattice.html#netket.graph.Lattice.distances_euclidean) — pairwise Euclidean distances between lattice sites with optional minimum-image convention.
- `Lattice.translation_group(strides=...)` — construct translation subgroups directly.
- `FiniteGroup.is_subgroup()` and `TranslationGroup.is_subgroup()` — check whether one group is a subgroup of another.

---

## A new, structured callback system

Callbacks are used to _inject_ custom code inside of a standard training loop. They are a simple, fast way to customize what happens during an optimization without writing a full fledged driver.
In previous versions of NetKet, callbacks were functions (`__call__(step, log_data, driver)`) that were executed in a specific point of the driver, after computing the parameter update but before applying it.
This worked for many use cases, but made it awkward to implement anything that needed to react at different phases of the optimisation loop — for example, logging metadata at the start of a run, accepting or rejecting optimization steps, or simmetrizing samples.

NetKet 3.22 introduces a more flexible class-based system, largely inspired by Keras callbacks.
Callbacks are now subclasses of [`netket.callbacks.AbstractCallback`](https://netket.readthedocs.io/en/latest/api/_generated/callbacks/netket.callbacks.AbstractCallback.html), which implement one or more of the following functions that are called at specific points of the optimization.
By playing with different steps, it's now possible to check whether a condition is satisfied on `on_compute_update_end` and refuse a step, or it's possible to change samples before the gradient is computing by defining `on_compute_update_start`.

| Hook | When it fires |
|------|---------------|
| `on_run_start` | once, before the first step |
| `on_step_start` | at the beginning of every step |
| `on_compute_update_start` | before the gradient/update is computed |
| `on_compute_update_end` | after the update is computed, **before** it is applied |
| `before_parameter_update` | just before parameters are updated |
| `on_step_end` | at the end of every step |
| `on_run_end` | once, after the last step |
| `on_run_error` | if an exception escapes the run loop |

Two additional control-flow mechanisms are available:
- A callback that returns `True` from `on_compute_update_end` **rejects the current step** and asks the driver to recompute it (useful for adaptive step-size logic).
- Any hook can raise `StopRun` to terminate training gracefully.


Detailed documentation and examples are in the new
[advanced callbacks guide](https://netket.readthedocs.io/en/latest/api/callbacks.html).
Additionally, we provide two useful callbacks built on this system:

[**`AutoChunkSize`**](https://netket.readthedocs.io/en/latest/api/_generated/callbacks/netket.callbacks.AutoChunkSize.html) — automatically tunes the `chunk_size` of the variational state during training to stay within GPU memory limits, without manual tuning:

[**`AutoSlurmRequeue`**](https://netket.readthedocs.io/en/latest/api/_generated/callbacks/netket.callbacks.AutoSlurmRequeue.html) — detects the Slurm job's remaining time budget, checkpoints the current state, and requeues the job before the time limit is hit.

---

## Improvements to SR and linear solvers

SR sometimes gives NaNs. After careful studies, we realised this is due to using `cholesky` as a linear system solver, which is unstable for very ill-defined matrices. However, using `pinv` always is not a viable choice because it's too expensive.
Therefore we now default to:

### [`cholesky_with_fallback`](https://netket.readthedocs.io/en/latest/api/_generated/optim/netket.optimizer.solver.cholesky_with_fallback.html)  — a more robust default

This linear solver combines the best of both: it attempts Cholesky first, and if a NaN output is detected, performs the calculation again with `pinv_smooth`.

A general combinator [`nan_fallback`](https://netket.readthedocs.io/en/latest/api/_generated/optim/netket.optimizer.solver.nan_fallback.html) is also available for wrapping any pair of solvers.

### Solver diagnostics

[`pinv_smooth`](https://netket.readthedocs.io/en/latest/api/_generated/optim/netket.optimizer.solver.pinv_smooth.html) now returns a structured diagnostics dictionary as its second return value (previously `None`):
Moreover, you can pass `return_eigvals=True` to `pinv_smooth` to also get the full eigenvalue array, which is useful for diagnosing ill-conditioning.

```python
x, info = solver(A, b)
# info = {"eval_min": 1e-6, "eval_max": 3.2, "rank": 512, "cond_number": 3.2e6}
```

### Distributed dense solvers for multi-GPU SR

Two new optional solvers, [`cholesky_distributed`](https://netket.readthedocs.io/en/latest/api/_generated/optim/netket.optimizer.solver.cholesky_distributed.html) and [`pinv_smooth_distributed`](https://netket.readthedocs.io/en/latest/api/_generated/optim/netket.optimizer.solver.pinv_smooth_distributed.html), are backed by [`jaxmg`](https://github.com/flatironinstitute/jaxmg) (by [Roeland Wiersema](https://github.com/therooler)) and allow the SR/NTK matrix to remain **sharded across devices** during the solve, avoiding the all-gather that otherwise limits scaling to large sample counts and acting as an optional dependency that is most useful in that regime.

### Other improvements

`VMC_SR` with `on_the_fly=True` in NTK mode has been significantly improved to reduce GPU memory consumption and to support the new distributed solvers.

---

## Delta-method error propagation for nonlinear observables

Some observables, such as the Rényi-2 entanglement entropy or the variance of the energy, are **nonlinear** functions of the Monte Carlo estimators.
For these quantities, the standard formula $\sigma^2[\langle O \rangle] = \text{Var}[O_\text{loc}]/N$ is incorrect because error propagation must account for the covariance between the different local-estimator channels.

NetKet 3.22 implements a system based on the [delta method](https://en.wikipedia.org/wiki/Delta_method) to compute error estimations for arbitrary observables, and makes it very easy to define new observables this way.

---

## Stable observables

The `netket.observable` module is now stable and gathers all high-level
observables previously scattered under `netket.experimental.observable`.
The old paths are deprecated and will be removed in a future release.

The following observables are now available at their stable locations:

- [`netket.observable.Renyi2EntanglementEntropy`](https://netket.readthedocs.io/en/latest/api/_generated/observable/netket.observable.Renyi2EntanglementEntropy.html) — Rényi-2 entanglement entropy
- [`netket.observable.VarianceObservable`](https://netket.readthedocs.io/en/latest/api/_generated/observable/netket.observable.VarianceObservable.html) — variance of an arbitrary operator
- [`netket.observable.InfidelityOperator`](https://netket.readthedocs.io/en/latest/api/_generated/observable/netket.observable.InfidelityOperator.html) — infidelity between two states
- [`netket.observable.VScore`](https://netket.readthedocs.io/en/latest/api/_generated/observable/netket.observable.VScore.html) — the [V-score](https://doi.org/10.1126/science.adg9774) $V = N_s \cdot \text{Var}(E) / E^2$, a dimensionless benchmark of ansatz quality comparable across system sizes and Hamiltonians, whose error bar is correctly computed via the delta-method machinery introduced in this release

All of these observables implement the `local_estimators` dispatch, providing
correct delta-method error estimates and full support for `expect_to_precision`.

---

## `EmbedOperator` for composite systems

[`netket.operator.EmbedOperator`](https://netket.readthedocs.io/en/latest/api/_generated/operator/netket.operator.EmbedOperator.html) embeds an operator acting on a sub-space into a larger `TensorHilbert` space:

$$\hat{O}_\text{embed} = \mathbb{I}_0 \otimes \cdots \otimes \hat{O}_i \otimes \cdots \otimes \mathbb{I}_N$$

This is heavily inspired by the same operation in qutip, and gives the canonical building block for Hamiltonians of composite systems.
As an example, a Kondo-like model coupling itinerant fermions to localised spins can be written as:

```python
hi_el   = nk.hilbert.SpinOrbitalFermions(n_orbitals=4, n_fermions=2)
hi_spin = nk.hilbert.Spin(s=0.5, N=4)
hi      = nk.hilbert.TensorHilbert(hi_el, hi_spin)

H_hop   = build_hopping_hamiltonian(hi_el)
H_spin  = build_spin_hamiltonian(hi_spin)
H_kondo = build_kondo_coupling(hi_el, hi_spin)

H = (
    nk.operator.EmbedOperator(H_hop, hi, 0)
    + nk.operator.EmbedOperator(H_spin, hi, 1)
    + H_kondo
)
```

---

## Logging enhancements

### MLflow integration

The new [`netket.logging.MLFlowLog`](https://netket.readthedocs.io/en/latest/api/_generated/driver/netket.logging.MLFlowLog.html) logger streams metrics and optional model checkpoints to an [MLflow](https://mlflow.org) tracking server, making it easy to track and compare runs through MLflow's UI.

### Saving variational states with `SaveVariationalState`

The new [`netket.logging.SaveVariationalState`](https://netket.readthedocs.io/en/latest/api/_generated/driver/netket.logging.SaveVariationalState.html) callback saves the full variational state to disk at fixed intervals using the [`nqxpack`](https://github.com/NeuralQXLab/nqxpack) package (optional dependency). 
Files are named `{root}_{step:05d}.nk` and can be reloaded with `nqxpack.load`.

### `JsonLog` append mode

[`JsonLog`](https://netket.readthedocs.io/en/latest/api/_generated/driver/netket.logging.JsonLog.html) now supports `mode="append"`, which loads the existing log and continues from the last recorded step — making it much easier to resume a run without losing the history from previous segments.

### Wallclock timestamps

All drivers now log a `wallclock` timestamp at every step.
This makes it straightforward to produce wall-time learning curves, which are more informative than step-number curves when comparing different algorithms or hardware configurations.

---

## Acknowledgements

NetKet 3.22 is the result of contributions from many people.
We thank all contributors, issue reporters, and users who provided feedback during the development cycle.

The full list of changes, including bug fixes and deprecations, is available in the [CHANGELOG](https://netket.readthedocs.io/en/latest/changelog.html).

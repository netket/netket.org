---
title: "Unbiasing time-dependent Variational Monte Carlo by projected quantum evolution"
authors:
    - Alessandro Sinibaldi
    - Clemens Giuliani
    - Giuseppe Carleo
    - Filippo Vicentini
date: 2023-05-23
arxiv: 2305.14294
journal: Quantum 7, 1131
doi: 10.22331/q-2023-10-10-1131

repository: https://github.com/netket/netket_fidelity
netket: false

---

We analyze the accuracy and sample complexity of variational Monte Carlo approaches to simulate the dynamics of many-body quantum systems classically. By systematically studying the relevant stochastic estimators, we are able to: (i) prove that the most used scheme, the time-dependent Variational Monte Carlo (tVMC), is affected by a systematic statistical bias or exponential sample complexity when the wave function contains some (possibly approximate) zeros, an important case for fermionic systems and quantum information protocols; (ii) show that a different scheme based on the solution of an optimization problem at each time step is free from such problems; (iii) improve the sample complexity of this latter approach by several orders of magnitude with respect to previous proofs of concept. Finally, we apply our advancements to study the high-entanglement phase in a protocol of non-Clifford unitary dynamics with local random measurements in 2D, first benchmarking on small spin lattices and then extending to large systems.


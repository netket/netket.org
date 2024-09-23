---
title: "Simple Fermionic backflow states via a systematically improvable tensor decomposition"
authors:
    - Massimo Bortone
    - Yannic Rath
    - George H. Booth
date: 2024-07-16
arxiv: 2407.11779
#journal: 	Quantum 8, 1245
#doi: 10.22331/q-2024-02-08-1245

repository: https://github.com/BoothGroup/GPSKet/tree/master/scripts/cpd-backflow
netket: true

---

We present an effective ansatz for the wave function of correlated electrons that brings closer the fields of machine learning parameterizations and tensor rank decompositions.
We consider a CANDECOMP/PARAFAC (CP) tensor factorization of a general backflow transformation in second quantization for a simple, compact and systematically improvable Fermionic state.
This directly encodes N-body correlations without the ordering dependence of other tensor decompositions.
We consider and explicitly demonstrate various controllable truncations, in the rank and range of the backflow correlations or magnitude of local energy contributions, in order to systematically affect scaling reductions to O(N³)-O(N⁴).
Benchmarking against small Fermi-Hubbard and chemical systems reveals an improvement over other NQS-like models, while extending towards larger strongly correlated ab initio systems demonstrates competitive accuracy with more established DMRG techniques on ab initio 2D hydrogenic lattices with realistic long-range Coulomb interactions.

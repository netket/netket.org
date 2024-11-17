---
title: "Impact of conditional modelling for a universal autoregressive quantum state"
authors:
    - Massimo Bortone
    - Yannic Rath
    - George H. Booth
date: 2024-01-15
arxiv: "2306.05917"
journal: 	Quantum 8, 1245
doi: 10.22331/q-2024-02-08-1245

repository: https://github.com/BoothGroup/GPSKet/tree/master/scripts/ARGPS
netket: true

---

We present a generalized framework to adapt universal quantum state approximators, enabling them to satisfy rigorous normalization and autoregressive properties.
We also introduce filters as analogues to convolutional layers in neural networks to incorporate translationally symmetrized correlations in arbitrary quantum states.
By applying this framework to the Gaussian process state, we enforce autoregressive and/or filter properties, analyzing the impact of the resulting inductive biases on variational flexibility, symmetries, and conserved quantities.
In doing so we bring together different autoregressive states under a unified framework for machine learning-inspired ansätze.
Our results provide insights into how the autoregressive construction influences the ability of a variational model to describe correlations in spin and fermionic lattice models, as well as ab-initio electronic structure problems where the choice of representation affects accuracy.
We conclude that, while enabling efficient and direct sampling, thus avoiding autocorrelation and loss of ergodicity issues in Metropolis sampling, the autoregressive construction materially constrains the expressivity of the model in many systems.
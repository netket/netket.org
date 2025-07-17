---
title: "Variational subspace methods and application to improving variational Monte Carlo dynamics"
authors:
    - Adrien Kahn
    - Luca Gravina
    - Filippo Vicentini
date: 2025-07-15
arxiv: "2507.08930"
netket: true
repository: https://github.com/NeuralQXLab/variational-subspace-methods

---

We present a formalism that allows for the direct manipulation and optimization of subspaces, circumventing the need to optimize individual states when using subspace methods. Using the determinant state mapping, we can naturally extend notions such as distance and energy to subspaces, as well as Monte Carlo estimators, recovering the excited states estimation method proposed by Pfau et al. As a practical application, we then introduce Bridge, a method that improves the performance of variational dynamics by extracting linear combinations of variational time-evolved states. We find that Bridge is both computationally inexpensive and capable of significantly mitigating the errors that arise from discretizing the dynamics, and can thus be systematically used as a post-processing tool for variational dynamics.
---
title: "Empirical sample complexity of neural network mixed state reconstruction"
authors:
    - Haimeng Zhao
    - Giuseppe Carleo
    - Filippo Vicentini
date: 2024-05-23
arxiv: 2307.01840
journal: Quantum 8, 1358
doi: 10.22331/q-2024-05-23-1358

repository: https://github.com/netket/netket
netket: true

---

Quantum state reconstruction using Neural Quantum States has been proposed as a viable tool to reduce quantum shot complexity in practical applications, and its advantage over competing techniques has been shown in numerical experiments focusing mainly on the noiseless case. 
In this work, we numerically investigate the performance of different quantum state reconstruction techniques for mixed states: the finite-temperature Ising model. 
We show how to systematically reduce the quantum resource requirement of the algorithms by applying variance reduction techniques. 
Then, we compare the two leading neural quantum state encodings of the state, namely, the Neural Density Operator and the positive operator-valued measurement representation, and illustrate their different performance as the mixedness of the target state varies. 
We find that certain encodings are more efficient in different regimes of mixedness and point out the need for designing more efficient encodings in terms of both classical and quantum resources.This provides a useful diagnostics for the practical representation power of an NQS ansatz.

---
title: "A simple linear algebra identity to optimize large-scale neural network quantum states"
authors:
    - Riccardo Rende
    - Luciano Viteritti
    - Lorenzo Bardone
    - Federico Becca
    - Sebastian Goldt
date: 2023-10-09
arxiv: 2310.05715
journal: Communication Physics 7, 260
doi: 10.1038/s42005-024-01732-4

repository: https://github.com/netket/netket
netket: true

---

Neural-network architectures have been increasingly used to represent quantum many-body wave functions. These networks require a large number of variational parameters and are challenging to optimize using traditional methods, as gradient descent. Stochastic reconfiguration (SR) has been effective with a limited number of parameters, but becomes impractical beyond a few thousand parameters. Here, we leverage a simple linear algebra identity to show that SR can be employed even in the deep learning scenario. We demonstrate the effectiveness of our method by optimizing a Deep Transformer architecture with 300'000 parameters, achieving state-of-the-art ground-state energy in the J1–J2 Heisenberg model at J2/J1=0.5 on the 10×10 square lattice, a challenging benchmark in highly-frustrated magnetism. This work marks a significant step forward in the scalability and efficiency of SR for neural-network quantum states, making them a promising method to investigate unknown quantum phases of matter, where other methods struggle.

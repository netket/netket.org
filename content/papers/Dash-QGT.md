---
title: "Efficiency of neural quantum states in light of the quantum geometric tensor"
authors:
    - Sidhartha Dash
    - Luca Gravina
    - Filippo Vicentini
    - Michel Ferrero
    - Antoine Georges
date: 2024-01-15
arxiv: 2402.01565
# journal: Quantum 7, 1131
# doi: 10.22331/q-2023-10-10-1131

# repository: https://github.com/netket/netket_fidelity
netket: true

---

Neural quantum state (NQS) ansätze have shown promise in variational Monte Carlo algorithms by their theoretical capability of representing any quantum state. 
However, the reason behind the practical improvement in their performance with an increase in the number of parameters is not fully understood. 
In this work, we systematically study the efficiency of restricted Boltzmann Machines (RBMs) to repre- sent the ground states in different phases of the spin-1 bilinear-biquadratic model, as the hidden layer density α increases. 
We train our ansatz by minimizing two different loss functions: 1) energy, and 2) infidelity of the NQS ansatz w.r.t. that of the exact ground state. 
We observe that the accuracy of our ansatz saturates with α in both cases. 
We demonstrate that this can be explained by looking at the spectrum of the quantum geometric tensor (QGT). We find that the rank of the QGT saturates be- yond a certain α, and we emphasize that it corresponds to the dimension of the relevant manifold for an optimized NQS. 
This provides a useful diagnostics for the practical representation power of an NQS ansatz.

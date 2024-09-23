---
title: "Variational Embeddings for Many Body Quantum Systems"
authors:
    - Stefano Barison
    - Filippo Vicentini
    - Giuseppe Carleo
date: 2023-09-15
arxiv: 2309.08666
# journal: Quantum 8, 1358
#doi: 10.22331/q-2024-05-23-1358

repository: https://github.com/StefanoBarison/hybrid_ansatz
netket: true

---


We propose a variational scheme to represent composite quantum systems using multiple param- eterized functions of varying accuracies on both classical and quantum hardware. 
The approach follows the variational principle over the entire system, and is naturally suited for scenarios where an accurate description is only needed in a smaller subspace. 
We show how to include quantum devices as high-accuracy solvers on these correlated degrees of freedom, while handling the remain- ing contributions with a classical device. 
We demonstrate the effectiveness of the protocol on spin chains and small molecules and provide insights into its accuracy and computational cost.
---
title: "Looking elsewhere: improving variational Monte Carlo gradients by importance sampling"
authors:
    - Antoine Misery
    - Luca Gravina
    - Alessandro Santini
    - Filippo Vicentini
date: 2025-07-15
arxiv: "2507.05352"
netket: true
repository: https://github.com/NeuralQXLab/importance_sampling_nqs
---

The paper discusses improving neural-network quantum states (NQS) training via Variational Monte Carlo (VMC) methods. The authors propose a systematic strategy to tackle sampling issues by means of adaptively tuned importance sampling that can reduce the computational cost of vanilla VMC considerably, up to a factor of 100x when targeting highly peaked quantum chemistry wavefunctions.
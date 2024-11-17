---
title: "Neural Projected Quantum Dynamics: a systematic study"
authors:
    - Luca Gravina
    - Vincenzo Savona
    - Filippo Vicentini
date: 2024-10-14
arxiv: "2410.10720"
# journal: 
# doi: 

# repository: https://github.com/
netket: true

---
We address the challenge of simulating unitary quantum dynamics in large systems using Neural Quantum States, focusing on overcoming the computational instabilities and high cost of existing methods.
This work offers a comprehensive formalization of the projected time-dependent Variational Monte Carlo (p-tVMC) method by thoroughly analyzing its two essential components: stochastic infidelity minimization and discretization of the unitary evolution.
We investigate neural infidelity minimization using natural gradient descent strategies, identifying the most stable stochastic estimators and introducing adaptive regularization strategies that eliminate the need for manual adjustment of the hyperparameter along the dynamics.
We formalize the specific requirements that p-tVMC imposes on discretization schemes for them to be efficient, and introduce four high-order integration schemes combining Taylor expansions, Padé approximants, and Trotter splitting to enhance accuracy and scalability.
We benchmark our adaptive methods against a 2D Ising quench, matching state of the art techniques without manual tuning of hyperparameters.
This work establishes p-tVMC as a highly promising framework for addressing complex quantum dynamics, offering a compelling alternative for researchers looking to push the boundaries of quantum simulations.

---
title: "NetKet 3: Machine Learning Toolbox for Many-Body Quantum Systems"
authors:
    - Filippo Vicentini
    - Damian Hofmann
    - Attila Szabó
    - Dian Wu
    - Christopher Roth
    - Clemens Giuliani
    - Gabriel Pescia
    - Jannes Nys
    - Vladimir Vargas-Calderón
    - Nikita Astrakhantsev
    - Giuseppe Carleo
date: 2022-08-24
journal: SciPost Physics Codebases
doi: 10.21468/scipostphyscodeb.7
arxiv: 2112.10526

repository: https://github.com/netket/netket
netket: true

---

We introduce version 3 of NetKet, the machine learning toolbox for many-body quantum physics. NetKet is built around neural-network quantum states and provides efficient algorithms for their evaluation and optimization. This new version is built on top of JAX, a differentiable programming and accelerated linear algebra framework for the Python programming language. The most significant new feature is the possibility to define arbitrary neural network ansätze in pure Python code using the concise notation of machine-learning frameworks, which allows for just-in-time compilation as well as the implicit generation of gradients thanks to automatic differentiation. NetKet 3 also comes with support for GPU and TPU accelerators, advanced support for discrete symmetry groups, chunking to scale up to thousands of degrees of freedom, drivers for quantum dynamics applications, and improved modularity, allowing users to use only parts of the toolbox as a foundation for their own code.


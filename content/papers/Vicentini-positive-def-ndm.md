---
title: "Positive-definite parametrization of mixed quantum states with deep neural networks"
authors:
    - Filippo Vicentini
    - Riccardo Rossi
    - Giuseppe Carleo
date: 2022-06-27 # date of first publication to arxiv
arxiv: "2206.13488" # arxiv number
netket: true # true/false if you used netket

# journal: SciPost Physics Codebases  # only if already published, the full citation (with year)
# doi: 10.21468/scipostphyscodeb.7    # only if published, the doi

# repository: https://github.com/netket/netket   # only if accompanying code has been released, full url

---

We introduce the Gram-Hadamard Density Operator (GHDO), a new deep neural-network architecture that can encode positive semi-definite density operators of exponential rank with polynomial resources. We then show how to embed an autoregressive structure in the GHDO to allow direct sampling of the probability distribution. These properties are especially important when representing and variationally optimizing the mixed quantum state of a system interacting with an environment. Finally, we benchmark this architecture by simulating the steady state of the dissipative transverse-field Ising model. Estimating local observables and the Rényi entropy, we show significant improvements over previous state-of-the-art variational approaches.
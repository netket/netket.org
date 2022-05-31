---
title: "UnitaryHack: Win bounties with NetKet "
date: 2022-05-01T10:23:16+01:00
draft: false
author: Filippo Vicentini
---

NetKet is participating in the 2022 edition of [UnitaryHack](https://unitaryhack.dev), kindly sponsored by the quantum non-profit [Unitary Fund](https://unitary.fund).

The hackathon will run for two weeks, from Friday, June 3 to Friday, June 17. During the hackathon, several high-profile quantum software projects are each proposing several tasks for which Unitary Fund will provide a bounty to the participant completing the task.

![Image alt](images/UHack_short.gif)


NetKet is participating with 4 bounties to this hackathon, which are worth US$ 300 in total. To claim a bounty, you need to get a PR accepted (not necessarily merged) by the maintainers *before* the end of the hackathon. The precise instructions to follow are found in the [UnitaryHack](https://unitaryhack.dev/hacker-guide/) website and the list of bounties can be found [here](https://unitaryhack.dev/projects/netket/).

We are offering the following 4 bounties, some of which don't require particular experience with quantum physics but which will benefit the usability of the NetKet project as a whole:

- [#1200](https://github.com/netket/netket/issues/1200) Add support for a single-file HDF5 based logging sink ($75)

  [HDF5](https://docs.h5py.org) is a commonly used file-format that can store any kind of data. We would like contributors to implement a logger that can output this kind of files. No experience with quantum-related topics is required to win this bounty!

- [#1201](https://github.com/netket/netket/issues/1201) Use colors to signal bad sampling in expectation value/samplers state (50$) 

  Sometimes users get bad results when running simulations with NetKet, but don't notice that there are sampling errors and that the software is already hinting at the solution. As this error is very common between novices and new users, we would like to integrate with the [rich framework](https://github.com/Textualize/rich) to display statistical convergence indicators using colors that vary depending on whether their value is good or bad.   

- [#1206](https://github.com/netket/netket/issues/1206) Implement support for Ladder operators in PauliStrings ($100) 

  NetKet implements several kind of specialized types of operators which behave somewhat like a sparse matrix, but can encode operators in Hilbert spaces much larger than 2^64, and which are much more efficient at the operations that we require for Monte-Carlo algorithms. One of those operators is the `PauliStrings` operator, very similar to qiskit's and Pennylane's `PauliStringSum` operators. Right now it supports the "X,Y,Z,I" operators, but we would like to add support for ladder operators. To work on this task, you'll need some knowledge of linear algebra/elementary quantum mechanics.

- [#1220](https://github.com/netket/netket/issues/1220) Add single-pass online statistics support to NetKet ($75) 

  The algorithms used by NetKet to compute statistical estimators and convergence indicators require that the whole set of random variables be kept in memory. However, in the future we would like to estimate those observables on amounts of data so large that do not fit on the memory of the device. Therefore, this bounty is about implementing single-pass algorithms that can estimate relevant quantities by reading the data only once. To work on this bounty, you'll need a basic understanding of statistics. 


If you are interested in those projects, but are unsure of where to start from, do get in touch with us through [NetKet's Slack channel](https://join.slack.com/t/mlquantum/shared_invite/zt-19wibmfdv-LLRI6i43wrLev6oQX0OfOw) or by launching a discussion on GitHub. 

We are really looking forward to welcoming new contributors to the project! 


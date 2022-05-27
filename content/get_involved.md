---
title: "Get Involved"
date: 2022-02-01T18:02:27+01:00
draft: false
menu: main
weight: 20

hero:
  show: true
  show_news: true
  title: "Get Involved"
  logo: "logo/logo_transparent.png"
---

# Getting In Touch with the community

Users and developers of NetKet hang out in the following places:

 - [GitHub Discussions:](https://github.com/netket/netket/discussions) we encourage users who have questions about NetKet and Neural Quantum States in general to start a discussion thread. We like them because they are not ephemeral, they are indexed by search engines, and if you get an answer it might benefit other people in the future.
 - [GitHub Issues:](https://github.com/netket/netket/pulls) if you believe you have found a bug, or have a feature request or just want to discuss something to implement in NetKet, we encourage you to start an Issue on GitHub! If you are unsure whether to start an issue or a discussion, open an issue. We can always change it later!
 - [Slack chat:]({{< slack_link >}}) Most NetKet developers and several users hang out in a slack workspace. The invite link to join is in the top left of the navigation bar of this website (Note: sometimes we forget to update the link before it expires. If it does not work, just open an issue on GitHub and we'll update it). This is an ephemeral chat that we use to quickly discuss or organise video-calls from time to time. Feel free to join and ask questions. 



# Google Summer of Code

NetKet will be participating in [Google Summer of Code](https://summerofcode.withgoogle.com/) (GSoC) 2022 as an independent organisation.

> Google Summer of Code is a global, online program focused on bringing new contributors into open source software development.
> GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors.

Participants must select an organisation and a project on which they want to work, and they receive a [stipend](https://developers.google.com/open-source/gsoc/help/student-stipends) for their contribution.
Projects can either be 175 hours-long (approximately 12 weeks) or 350 hours-long (approximately 22 weeks). 
More details are provided on Google's website.

If you are interested in contributing to NetKet under the Google's summer of code, we encourage you to get in touch with us to discuss the project you would like to undertake. 
Below we list some projects that we would be very happy to mentor, but if you have other ideas we will consider them.

Due to the nature of NetKet, we look for participants who understand the basis of quantum mechanics and numerical physics. 
Senior master students in Math/Physics/Computer science or Doctoral students are our ideal contributors.

## Implement Implicit variational time evolution Algorithms

Even if the Time-Dependent Variational Principle can be used to perform the time-evolution of Neural Quantum States already solving an explicit first order equation.
However, in some cases implicit algorithms such as those proposed in [ArXiV:1912.08831](https://arxiv.org/abs/1912.08831) might be more stable.
This project would see the participant implement functions to optimise the overlap (fidelity) between two states, and use this routine to perform the time evolution according to a first and/or second order implicit equation.


**Recommended Skills:** Background knowledge in machine learning, numerical analysis and monte carlo methods. Knowledge of Jax.

**Expected Results:** Implement an implicit-time evolution algorithm

**Project Length:** 175 hours (can be extended if the candidate wishes to) 

**Mentors:** Filippo Vicentini (@PhilipVinc), Damian Hoffmann (@femtobit) 

## Implement Tensor-Network ansatze with NetKet

Tensor Network techniques such as MPS are very established in the numerical community. 
While for 1-Dimensional systems it is possible to perform computations exactly and there is no need to perform Monte-Carlo sampling, in higher dimensions this is a viable option.
This project would see the candidate implementing Tensor Network (MPS and PEPS) functionalities with NetKet, possibly by integrating with existing Jax libraries such as [Google's TensorNetwork](https://github.com/google/TensorNetwork).

**Recommended Skills:** Basic knowledge of tensor network and monte carlo methods. Knowledge of Jax.

**Expected Results:** Implement MPS with NetKet

**Project Length:** 175 hours (can be extended to work on PEPS too) 

**Mentors:** Filippo Vicentini (@PhilipVinc)

## Improve ODE functionality

The Time-Dependent Variational Principle can be used to perform the time-evolution of Neural Quantum States already solving an explicit first order equation.
However, in some cases implicit algorithms such as those proposed in [ArXiV:1912.08831](https://arxiv.org/abs/1912.08831) might be more stable.
This project would see the participant implement functions to optimise the overlap (fidelity) between two states, and use this routine to perform the time evolution according to a first and/or second order implicit equation.

**Recommended Skills:** Background knowledge in machine learning, numerical analysis and monte carlo methods. 

**Expected Results:** Implement an implicit-time evolution algorithm

**Project Length:** 175 hours.  

**Mentors:** Filippo Vicentini (@PhilipVinc), Damian Hoffmann (@femtobit) 

## Make NetKet fully differentiable

Right now NetKet provides some high-level objects which cannot be differentiated. 
We would like to make NetKet fully differentiable with `jax.grad`. 
Examples of this are our operators, which can only be indexed with Numba from outside NetKet, or our variational states, which perform some operations outside of a Jax context.
The first step in this project would be designing an API to make our operators Jax-friendly while maintaining backward compatibility, and then devising a way to make our high-level API differentiable.

**Recommended Skills:** Familiarity with Jax and data structure design. 

**Expected Results:** high-level API (`expect`) must be differentiable.

**Project Length:** 175 hours.  

**Mentors:** Filippo Vicentini (@PhilipVinc)

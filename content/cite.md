---
title: "Citing"
date: 2022-02-01T18:02:27+01:00
draft: false
menu: main
weight: 30

hero:
  show: true
  show_news: true
  title: "Citing"
  subtitle: "Sustain the developers!"
  logo: "logo/logo_transparent.png"

---

If you find the NetKet project useful for your research, please consider citing our relevant software papers
in order to help us to continue devoting time and resources to NetKet development.

The current version of NetKet 3.x is described in our recent preprint [arXiv:2112.10526](https://arxiv.org/abs/2112.10526).

NetKet 2.x is described in [SoftwareX 10, 100311 (2019)](https://doi.org/10.1016/j.softx.2019.100311).
Despite many new features, NetKet 3 still builds on the foundations of the NetKet 2 era too. Therefore,
we would appreciate it if you cite both papers in order to continue giving credit to all the authors of
NetKet 2 as well.

Below are BibTeX entries for both papers:

```bibtex
@Article{netket3:2022,
	title={{NetKet 3: Machine Learning Toolbox for Many-Body Quantum Systems}},
	author={Filippo Vicentini and Damian Hofmann and Attila Szabó and Dian Wu and Christopher Roth and Clemens Giuliani and Gabriel Pescia and Jannes Nys and Vladimir Vargas-Calderón and Nikita Astrakhantsev and Giuseppe Carleo},
	journal={SciPost Phys. Codebases},
	pages={7},
	year={2022},
	publisher={SciPost},
	doi={10.21468/SciPostPhysCodeb.7},
	url={https://scipost.org/10.21468/SciPostPhysCodeb.7},
}

@article{netket2:2019,
  author    = {Carleo, Giuseppe and Choo, Kenny and Hofmann, Damian and
      Smith, James E.~T. and Westerhout, Tom and Alet, Fabien and
      Davis, Emily J. and Efthymiou, Stavros and Glasser, Ivan and
      Lin, Sheng-Hsuan and Mauri, Marta and Mazzola, Guglielmo and
      Mendl, Christian B. and van Nieuwenburg, Evert and
      O'Reilly, Ossian and Th{\'e}veniaut, Hugo and Torlai, Giacomo and Vicentini, Filippo and
      Wietek, Alexander},
  title     = {NetKet: A Machine Learning Toolkit for Many-Body Quantum Systems},
  journal   = {SoftwareX},
  pages     = {100311},
  doi       = {10.1016/j.softx.2019.100311},
  url       = {http://www.sciencedirect.com/science/article/pii/S2352711019300974},
  year      = 2019
}

```


## Mpi4Jax

If you use NetKet 3.x with MPI, please also consider citing [mpi4jax](https://github.com/mpi4jax/mpi4jax), which we rely on.

```bibtex
  @article{mpi4jax:2021,
    doi = {10.21105/joss.03419},
    url = {https://doi.org/10.21105/joss.03419},
    year = {2021},
    publisher = {The Open Journal},
    volume = {6},
    number = {65},
    pages = {3419},
    author = {Dion Häfner and Filippo Vicentini},
    title = {mpi4jax: Zero-copy MPI communication of JAX arrays},
    journal = {Journal of Open Source Software}
  }
```

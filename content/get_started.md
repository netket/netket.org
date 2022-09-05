---
title: "Get Started"
date: 2022-02-01T18:02:27+01:00
draft: false

hero:
  show: true
  show_news: true
  title: "Get Started"
  subtitle: "In Few Easy steps!"
  logo: "logo/logo_transparent.png"
---

# QuickStart on the Cloud

The simplest way to get started with NetKet is to use [Google's Colab](https://colab.research.google.com/?utm_source=scs-index), an online notebook environment with access to GPUs. 
If you have a google, account, simply head to [NetKet's documentation](https://netket.readthedocs.io/en/latest/), select the first tutorial, and click on the small rocket icon on the top navigation bar. 
This will launch the tutorial on an online environment that is ready to use.

For example, you can simply click on this button and get started!
The notebook will automatically install netket.

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/PhilipVinc/NetKet-lectures/blob/master/01_intro.ipynb)


# Local Installation 

You can also install NetKet on your local computer following those instructions:

{{% card_collapse summary="Make sure you have Python 3.7 or higher installed on Mac or Linux" %}}
If Python 3.7 is not available on your computer, don't despair! 
You can use [pyenv](https://github.com/pyenv/pyenv) (the easiest way to install it is with the [pyenv installer](https://github.com/pyenv/pyenv-installer) to install any Python version, or you can use Anaconda, even though the latter is not recommended if you plan on using MPI.

Windows is not natively supported because Jax does not yet support it. 
However, if you use WSL (Windows Subsystem for Linux) NetKet will run smoothly.
{{% /card_collapse %}}


{{% card_collapse summary="If you plan to use MPI, make sure you have an up to date version of the `mpicc` compilers available on your path." %}}
When using MPI, we recommend not to use Anaconda unless it's for small experimentation on a laptop.
This is due to a dependency of netket, mpi4jax. You can read more about the limitations on the [mpi4jax documentation](https://mpi4jax.readthedocs.io/en/latest/installation.html>).
{{% /card_collapse %}}

{{% card_collapse expanded=true summary="Use this widget below to find the best command to install NetKet." %}}
{{< installationWidget >}}

If you have issues, check the [full documentation](https://netket.readthedocs.io/en/latest/docs/install.html).
{{% /card_collapse %}}

{{% card_collapse summary="Explore our [Tutorials](https://netket.readthedocs.io/en/latest/tutorials/gs-ising.html) and check out our [Examples](https://github.com/netket/netket/tree/master/Examples). If you still have questions, get in touch with us!" %}}

- Tutorials are commented python notebooks.
- Examples are sample python files that can be run.
- If you still have questions, feel free to get in touch through our [GitHub Issues](https://github.com/netket/netket/issues) or to [start a discussion thread](https://github.com/netket/netket/discussions)
- If you want to experiment with mpi, try running some examples with 

```python
mpirun -np2 python path/to/example.py
```
{{% /card_collapse %}}

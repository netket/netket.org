var osContainer = document.getElementById("os"); // Gets the container Element
var osOptions = osContainer.getElementsByClassName("option"); // Get all buttons with class="option" inside the container, as an HTMLCollection

var packageContainer = document.getElementById("package"); // Repeat for other rows
var packageOptions = packageContainer.getElementsByClassName("option");

var accelleratorContainer = document.getElementById("accellerator");
var accelleratorOptions = accelleratorContainer.getElementsByClassName("option");

var extrasContainer = document.getElementById("extras");
var extrasOptions = extrasContainer.getElementsByClassName("option");

updateCommand = () => {
    var selectedOptions = document.getElementsByClassName("selected") // Live HTMLCollection
    console.log(`Selected things are: `, selectedOptions)
    var osId = selectedOptions[0].id // selectedOptions[0] is a Node from above live HTMLCollection, Node is similar to Element. selectedOptions[0].id returns the id value of the Node. Syntax is 'Element.id'
    var packageId = selectedOptions[1].id // returns string data type
    var accelleratorId = selectedOptions[2].id

    var selectedExtras = document.getElementsByClassName("selected extra-opt") // Live HTMLCollection

    console.log(`OS is `, osId, `and package is `, packageId, ` and accellerator is `, accelleratorId, ` and extras `, selectedExtras)

    var extras_variants = ""
    var extra_packages = ""
    if (selectedExtras.length > 0) {
        for (var i = 0; i < selectedExtras.length; i++) {
            extra_id = selectedExtras[i].id
            switch(extra_id) {
                case 'mpi':
                    extras_variants = extras_variants.concat("mpi, ")
                    break;
                case 'qutip':
                    extra_packages = extra_packages.concat("qutip")
                    break;
                case 'openfermion':
                    extras_variants = extras_variants.concat("extra, ")
                    break;
            }
            console.log(i)

        }
        extras_variants = extras_variants.slice(0, -2)
        extras_variants = `[${extras_variants}]`
    } 

    console.log(`extra variant `, extras_variants)
    console.log(`extra_packages `, extra_packages)


   var acc_string = ""

   switch(accelleratorId) {
    case 'gpu':
        acc_string = "-f https://storage.googleapis.com/jax-releases/jax_releases.html 'jax[cuda]'";
        break;
    default:
        break;
   }

   var prep_string = "";
   switch(osId) {
        case 'macos-arm':
            prep_string = "pip install 'numpy==1.21.*' importlib-metadata\n pip install -i https://pypi.anaconda.org/numba/label/wheels_experimental_m1/simple numba";
   }

   var pkg_name = "netket";
   switch(packageId) {
        case 'source':
            pkg_name = "git+https://github.com/netket/netket.git#egg=netket";
            break;
        default:
        break
   }

   switch(packageId) {
       case 'source':
       case 'pip':
           // Note: the per-platform docs at
           // http://scipy.github.io/devdocs/building/index.html#building are
           // out of date and also need to be made NumPy-specific
           switch(osId) {
                case 'macos-arm':
                    document.getElementById("command").innerHTML = `
                    ${prep_string}
                    pip install --upgrade pip
                    pip install --upgrade ${acc_string} '${pkg_name}${extras_variants}' ${extra_packages}
                    `.replace(/ +(?= )/g,'');
                    break;
                case 'macos':
                case 'linux':
                    document.getElementById("command").innerHTML = `
                    pip install --upgrade pip
                    pip install --upgrade ${acc_string} '${pkg_name}${extras_variants}' ${extra_packages}
                    `.replace(/ +(?= )/g,'');
                    break;
            }
        break;

        case 'conda': 
            document.getElementById("command").innerHTML = `
            conda install -c conda-forge netket ${extra_packages}
            `.replace(/ +(?= )/g,'');
            break;
   }
}

// Loop through the buttons. Add and remove the active class to the clicked button
for (var i = 0; i < osOptions.length; i++) {
    osOptions[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("selected"); // returns an HTMLCollection, an interface that represents a generic collection (array-like object similar to arguments) of elements. An HTMLCollection in the HTML DOM is live; it is automatically updated when the underlying document is changed.

    console.log(`this is current`, current)
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
    console.log(`osContainer`, osContainer)
    console.log(`osOptions`, osOptions)

    var osId = current[0].id // selectedOptions[0] is a Node from above live HTMLCollection, Node is similar to Element. selectedOptions[0].id returns the id value of the Node. Syntax is 'Element.id'
    switch(osId) {
        case 'linux':
            document.getElementById("gpu").classList.remove("disabled");
            break;
        case 'macos':
        case 'macos-arm':
            document.getElementById("gpu").classList.add("disabled");
            document.getElementById("gpu").classList.remove("selected");
            document.getElementById("cpu").classList.add("selected");
            break;
    }

    updateCommand()
  });
}

for (var i = 0; i < packageOptions.length; i++) {
    packageOptions[i].addEventListener("click", function() {
    var current = packageContainer.getElementsByClassName("selected");
    console.log(`this is current`, current)
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
    console.log(`packageContainer `,packageContainer)
    console.log(`packageOptions `,packageOptions)

    var packageId = current[0].id // selectedOptions[0] is a Node from above live HTMLCollection, Node is similar to Element. selectedOptions[0].id returns the id value of the Node. Syntax is 'Element.id'
    switch(packageId) {
        case 'conda':
            document.getElementById("gpu").classList.add("disabled-p");
            document.getElementById("gpu").classList.remove("selected");
            document.getElementById("cpu").classList.add("selected");


            document.getElementById("mpi").classList.add("selected");
            document.getElementById("mpi").classList.add("forced");
            break;
        default:
            document.getElementById("gpu").classList.remove("disabled-p");
            document.getElementById("mpi").classList.remove("forced");
            break;
    }

    updateCommand()
  });
}

for (var i = 0; i < accelleratorOptions.length; i++) {
    accelleratorOptions[i].addEventListener("click", function() {
    var current = accelleratorContainer.getElementsByClassName("selected");
    console.log(`this is current`, current)
    if (this.classList.contains("disabled") || this.classList.contains("disabled-p")) {
        console.log(`accelleratorContainer disabled`)
    } else {
        current[0].className = current[0].className.replace(" selected", "");
        this.className += " selected";
        console.log(`accelleratorContainer `,accelleratorContainer)
        console.log(`accelleratorOptions `,accelleratorOptions)
        updateCommand()
    }
  });
}

for (var i = 0; i < extrasOptions.length; i++) {
    extrasOptions[i].addEventListener("click", function() {
    var current = extrasContainer.getElementsByClassName("selected");
    console.log(`this is current`, current)
    //current[0].className = current[0].className.replace(" selected", "");
    if (this.classList.contains("selected")) {
        this.classList.remove("selected")
    } else {
        this.className += " selected";
    }
    console.log(`extrasContainer `,extrasContainer)
    console.log(`extrasOptions `,extrasOptions)
    updateCommand()
  });
}

window.onload = function() {
  updateCommand();
};

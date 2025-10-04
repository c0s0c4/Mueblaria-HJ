// lista del buscador
const input = document.getElementById("input")
const lista = document.getElementById("listadeproductos")
const items = lista ? lista.getElementsByTagName("li") : []

if (input) {
    input.addEventListener("input", function() {
        const filtro = input.value.toLowerCase()
        let tieneCoincidencias = false

        for (let i = 0; i < items.length; i++) {
            const texto = items[i].textContent.toLowerCase();
            if (texto.includes(filtro) && filtro !== "") {
                items[i].style.display = "block"
                tieneCoincidencias = true
            } else {
                items[i].style.display = "none"
            }
        }

        lista.style.display = tieneCoincidencias ? "block" : "none"
    });
}

window.onload = function() {
    const input = document.getElementById("input");
    const lista = document.getElementById("listadeproductos");
    const items = lista ? lista.getElementsByTagName("li") : [];

    // Filtrado en vivo del buscador
    if (input) {
        input.addEventListener("input", function() {
            const filtro = input.value.toLowerCase();
            let tieneCoincidencias = false;

            for (let i = 0; i < items.length; i++) {
                const texto = items[i].textContent.toLowerCase();
                if (texto.includes(filtro) && filtro !== "") {
                    items[i].style.display = "block";
                    tieneCoincidencias = true;
                } else {
                    items[i].style.display = "none";
                }
            }

            lista.style.display = tieneCoincidencias ? "block" : "none";
        });
    }

    // 👇 Click en cada resultado → redirige al detalle con el ID
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            window.location.href = `detalle.html?producto=${id}`;
        });
    }
}

// array de productos con ID
const productos = {
  "aparador-uspallata": {
    nombre: "Aparador Uspallata",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/37/22/31/372231f1cd4626ffacd00d291a9ebfb3.jpg"
  },
  "butaca-mendoza": {
    nombre: "Butaca Mendoza",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/07/c3/ae/07c3ae88ac82841b831f403e645d699f.jpg"
  },
  "biblioteca-recoleta": {
    nombre: "Biblioteca Recoleta",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/d9/bc/60/d9bc6026763ba71fb9999e1cef01b2e2.jpg"
  },
  "mesa-centro-araucaria": {
    nombre: "Mesa de Centro Araucaria",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/1f/2f/ad/1f2fad8d9f02f28795e88790124763a3.jpg"
  },
  "sillon-copacabana": {
    nombre: "Sillón Copacabana",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/26/e9/6a/26e96ac7e0c0711f134abe502db1df04.jpg"
  },
  "mesa-noche-aconcagua": {
    nombre: "Mesa de Noche Aconcagua",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/90/5b/ac/905bac94d0ff461dc024c3667604c321.jpg"
  },
  "sofa-patagonia": {
    nombre: "Sofá Patagonia",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/f9/98/27/f99827073b0283e4ec9f3fd9b7c04d87.jpg"
  },
  "cama-neuquen": {
    nombre: "Cama Neuquén",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/e0/ac/09/e0ac09825a6ab0378408b65337c16398.jpg"
  },
  "mesa-comedor-pampa": {
    nombre: "Mesa Comedor Pampa",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/18/4b/af/184baf4e320a71db29781444e808b065.jpg"
  },
  "escritorio-costa": {
    nombre: "Escritorio Costa",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/5a/d1/8c/5ad18ca8524bae72dc1ff804b2aacd9a.jpg"
  },
  "sillas-cordoba": {
    nombre: "Sillas Córdoba",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/02/b8/10/02b81016d95f9271166c82e101ed5b3a.jpg"
  },
  "silla-trabajo-belgrano": {
    nombre: "Silla de Trabajo Belgrano",
    precio: "$000",
    imagen: "https://i.pinimg.com/736x/41/69/34/4169345a6c1c36792263482c06ba7c8b.jpg"
  }
};


// array

const params = new URLSearchParams(window.location.search);
const productoId = params.get('id');

// Buscar producto
const productoSeleccionado = productos.find(p => p.id == productoId);

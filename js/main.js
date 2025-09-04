const figura = document.getElementById('figure');

// estilos

    function circulo () {
        figura.style.borderRadius = '50%';
        figura.style.backgroundColor = "red"
    }

    function star () {
        figura.style.clipPath="polygon(50% 0%, 61% 35%, 98% 35%, \ 68% 57%, 79% 91%, 50% 70%, 21% 91%, \ 32% 57%, 2% 35%, 39% 35%)";
    }  

    function gif () {
        figura.style.backgroundSize = 'cover';
        figura.style.backgroundImage = "url('gif/Riot Games Spinning GIF by Xbox.gif')";
    }

    function animacion () {
        let style = document.createElement("style");

        style.innerHTML = `
        @keyframes girar {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        `;
        document.head.appendChild(style);
        figura.style.animation = "girar 2s linear infinite";
    }

    function moveTop () {
        figura.style.transform = "translateY(-100px)";
    }

    function moveDown () {
        figura.style.transform = "translateY(100px)";
    }

    function moveLeft () {
        figura.style.transform = "translateX(-100px)";
    }

    function moveRight () {
        figura.style.transform = "translateX(100px)";
    }

// contenidos

    function titulo () {

        const title = document.getElementById("mainTitle");
            title.textContent = prompt("Escribe El Nuevo Título:");
    }

    function parrafo () {
        const parrafo = document.getElementById("mainParagraph");
            parrafo.textContent = prompt("Cambia el parrafo por el que desees");
    }
    
    function addParrafo () {
        const addParrafo = document.getElementById("extraParagraphs");
            addParrafo.innerHTML = "<p id='parrafoNew'></p>";  //agregue la etiqueta p pero dentro de ella agregue un ID para poder agregar el nuevo texto
            let parrafoNew = document.getElementById('parrafoNew'); //hice que el parrafo se capturara en una variable(Let) para  agregarla en la nueva etiqueta P
                parrafoNew.textContent = prompt("Agrega el nuevo texto");
    }

    function deleteParrafo () {
        const deleteParrafo = document.querySelector("#parrafoNew");
            deleteParrafo.remove();
    }

// contenidos

    function hex () {
        figura.style.backgroundColor = prompt("Escribe un valor en formato HEX, similar al siguiente: #000000")
    }

    function elegirFigura () {
        let valor = prompt("Elige que figura deseas: \n 1. Circulo \n 2. Estrella \n 3. Cuadrado");
        
        switch (valor) {
            case "1": circulo();
                break;
            case "2": star();
                    figura.style.backgroundColor = "black";
                break;
            case "3": figura.style.width = "300px";
                    figura.style.height = "300px";
                    figura.style.backgroundColor = "blue";
                break;
            default: alert("Opcion no valida")
                break;
        }
    }

    const arregloImagenes = ["img/imagen.jpg","img/imagen2.jpg","img/imagen3.jpg"];
    let index = 0;
    const imagen = document.getElementById("mainImage");

    function imagenN () {
        index = (index + 1) % arregloImagenes.length;
        imagen.src = arregloImagenes[index];
    }

    function imagenB () {
        index = (index - 1);
        imagen.src = arregloImagenes[index];
    }

    function mostrarOcultar () {
        if (imagen.style.display === "none") {
            imagen.style.display = "block";
            imagen.style.margin = "20px auto";
            } else {
                imagen.style.display = "none";
            }
    }

    function changeAlt () {
        let Alt = prompt("Agrega el nuevo texto alternativo de la imagen");
            imagen.setAttribute('alt', Alt);
    }

    const etiquetaA = document.getElementById('mainLink');

    function changeUrl () {
        let nuevaUrl = prompt("Cambia la url por la que tengas en mente");
            etiquetaA.setAttribute("href", nuevaUrl);
    }

    function addAtributo () {
        etiquetaA.setAttribute("target", "_blank");
    }

    function remove(){

    etiquetaA.removeAttribute("href");
    etiquetaA.style.color = "gray";
    etiquetaA.style.textDecoration = "none";

}



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnCircle").addEventListener("click", circulo);
    document.getElementById("btnStar").addEventListener("click", star);
    document.getElementById("btnGif").addEventListener("click", gif);
    document.getElementById("btnAnim").addEventListener("click", animacion);
    document.getElementById("btnMoveUp").addEventListener("click", moveTop);
    document.getElementById("btnMoveDown").addEventListener("click", moveDown);
    document.getElementById("btnMoveLeft").addEventListener("click", moveLeft);
    document.getElementById("btnMoveRight").addEventListener("click", moveRight);
    document.getElementById("btnChangeTitle").addEventListener("click", titulo);
    document.getElementById("btnChangeParagraph").addEventListener("click", parrafo);
    document.getElementById("btnAddParagraph").addEventListener("click", addParrafo);
    document.getElementById("btnRemoveParagraph").addEventListener("click", deleteParrafo);
    document.getElementById("btnHexColor").addEventListener("click", hex);
    document.getElementById("btnChooseFigure").addEventListener("click", elegirFigura);
    document.getElementById("btnChangeImageNext").addEventListener("click", imagenN);
    document.getElementById("btnChangeImagePrev").addEventListener("click", imagenB);
    document.getElementById("btnToggleImage").addEventListener("click", mostrarOcultar);
    document.getElementById("btnChangeAlt").addEventListener("click", changeAlt);
    document.getElementById("btnChangeLink").addEventListener("click", changeUrl);
    document.getElementById("btnOpenLink").addEventListener("click", addAtributo);
    document.getElementById("btnDisableLink").addEventListener("click", remove);
});
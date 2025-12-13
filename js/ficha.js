document.addEventListener("DOMContentLoaded", () => {

    const btnFiltrar = document.getElementById("btn-filtrar");

    btnFiltrar.addEventListener("click", () => {

        const especie = document.getElementById("filtro-especie").value.toLowerCase();
        const raca = document.getElementById("filtro-raca").value.toLowerCase();
        const vacinado = document.getElementById("filtro-vacinado").value.toLowerCase();
        const castrado = document.getElementById("filtro-castrado").value.toLowerCase();

        const cards = document.querySelectorAll(".model-container");

        cards.forEach(card => {
            const cardEspecie = card.dataset.especie.toLowerCase();
            const cardRaca = card.dataset.raca.toLowerCase();
            const cardVacinado = card.dataset.vacinado.toLowerCase();
            const cardCastrado = card.dataset.castrado.toLowerCase();

            let mostrar = true;

            if (especie && cardEspecie !== especie) mostrar = false;
            if (raca && !cardRaca.includes(raca)) mostrar = false;
            if (vacinado && cardVacinado !== vacinado) mostrar = false;
            if (castrado && cardCastrado !== castrado) mostrar = false;

            card.style.display = mostrar ? "block" : "none";
        });
    });

});
"use strict";

"use strict";

/**
 * Fichier de gestion de l'affichage de la grille.
 *
 * Ce fichier contient les fonctions liées à la création et à la modification
 * visuelle de la grille de jeu. Il permet de générer dynamiquement les lignes
 * et les cases selon le nombre d'essais et la longueur du mot, puis d'afficher
 * ou d'effacer une lettre dans une case précise.
 */

function setLetter(row, col, letter) {
    gameEl.children[col].children[row].textContent = letter;
}


function createGrid(essaies, word_length) {
    for (let i = 0; i < word_length; i++) {
        const html_div_row = document.createElement("div");
        html_div_row.classList.add("row");
        console.log(html_div_row)
        
        for (let j = 0; j < essaies; j++) {
            const html_div_tile = document.createElement("div");
            html_div_tile.classList.add("tile")
            html_div_row.append(html_div_tile);
        }
        gameEl.appendChild(html_div_row);
    }

    return essaies;
}
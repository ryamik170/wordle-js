"use strict";

/**
 * Fichier de logique principale du jeu.
 *
 * Ce fichier gère la vérification du mot proposé par le joueur.
 * Il crée un dictionnaire des lettres du mot cible, vérifie d'abord
 * les lettres bien placées, puis les lettres présentes mais mal placées
 * ou absentes. Il vérifie aussi si le joueur a gagné ou perdu, et contrôle
 * si le mot entré existe bien dans le lexique avant de valider l'essai.
 */

function create_dico(word) {
    let dico = {};

    for (let letter of word) {
        if (letter in dico) {
            dico[letter] += 1;
        } else {
            dico[letter] = 1;
        }
    }

    return dico;
}

function check_is_win(iswin) {
    console.log(iswin);
    console.log(currentRowIndex);
    if (iswin === targetWord.length) {
        const endgame = document.getElementById("endgame");
        endgame.textContent = "Bravo ! Vous avez gagné";
        document.removeEventListener("keyup", keyUpHandler);
    }

    if (currentRowIndex === essaies - 1 && iswin !== targetWord.length) {
        const endgame = document.getElementById("endgame");
        endgame.textContent = "Perdu ! le mot était " + targetWord;
        document.removeEventListener("keyup", keyUpHandler);
    }

}

function correct_letter_in_grid(dico_t) {
    let iswin = 0;
    //ajoute d'abord les lettres qui se trouvent à la bonne place
    for (let i = 0; i < targetWord.length; i++) {
        let tile = gameEl.children[i].children[currentRowIndex];
        let letter_in_grid = tile.textContent;
        let letter = targetWord[i];

        if (letter_in_grid === letter) {
            tile.classList.add("correct");
            dico_t[letter_in_grid] -= 1;
            iswin += 1;
        }
    }
    return iswin;
}

function present_or_absent(dico_t, iswin) {
    for (let i = 0; i < targetWord.length; i++) {
        let tile = gameEl.children[i].children[currentRowIndex];
        let letter_in_grid = tile.textContent;
        let letter = targetWord[i];

        if (tile.classList.contains("correct")) {
            continue;
        }

        if (targetWord.includes(letter_in_grid) && dico_t[letter_in_grid] > 0) {
            tile.classList.add("present");
            dico_t[letter_in_grid] -= 1;
        }
        else {
            tile.classList.add("absent");
        }
    }
    check_is_win(iswin)
}

function check_word() {
    let dico_t = create_dico(targetWord);
    let iswin = 0;

    iswin = correct_letter_in_grid(dico_t);
    present_or_absent(dico_t, iswin);

    currentRowIndex += 1;
    currentColumnIndex = 0;

}

function word_in_lexic() {
    let word = "";
    for (let i = 0; i < targetWord.length; i++) {
        let letter = gameEl.children[i].children[currentRowIndex].textContent;
        word += letter;
    }

    if (!lexicon[length_word].includes(word)) {
        for (let i = 0; i < targetWord.length; i++) {
            gameEl.children[i].children[currentRowIndex].textContent = "";
        }
        currentColumnIndex = 0;
        return false;
    }
    return true;
}
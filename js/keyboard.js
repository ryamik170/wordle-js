"use strict";

function delete_letter(backspace) {
    if (backspace == "Backspace") {
        if (currentColumnIndex > 0) {
            currentColumnIndex -= 1;
            setLetter(currentRowIndex, currentColumnIndex, "");
        }
    }
}

function add_letter_in_game(letter) {
    const Maj_alphabet = [
        "A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", 
        "L", "M", "N","O", "P", "Q", "R", 
        "S", "T", "U","V", "W", "X", "Y", "Z"];

    if (letter == "Backspace") {
        delete_letter(letter);
    }
    
    const letter_in_maj = letter.toUpperCase();

    if(Maj_alphabet.includes(letter_in_maj)) {
        setLetter(currentRowIndex, currentColumnIndex, letter_in_maj);
        currentColumnIndex += 1;
    }
}

function is_in_range() {
    if (currentColumnIndex == targetWord.length) {
        return false;
    }

    return true;
}

function keyUpHandler(event) {
    const letter = event.key;

    if(letter == "Enter") {
        if (currentColumnIndex === targetWord.length && word_in_lexic()) {check_word();}
    }

    let is_letter_in_range = is_in_range();

    if (is_letter_in_range == true) {
        add_letter_in_game(letter);
    }

    else {delete_letter(letter);}
}
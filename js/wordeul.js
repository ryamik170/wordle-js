"use strict";

function main() {
    console.log(targetWord);

    length_word = Number(document.getElementById("word-length").value);
    essaies = Number(document.getElementById("attempts").value);

    const words = lexicon[length_word];
    targetWord = words[Math.floor(Math.random() * words.length)];

    console.log(targetWord);

    createGrid(essaies, targetWord.length);

    document.getElementById("paneau").style.display = "none";
    document.getElementById("game").style.visibility = "visible";

    document.addEventListener("keyup", keyUpHandler);
}

document.getElementById("play-button").addEventListener("click", main);                                  

//console.log(gameEl)  //<section id="game">...</section>
//console.log(gameEl.children) //HTMLCollection(5) [div.row, div.row, div.row, div.row, div.row]
//console.log(gameEl.children[4]) //<div class="row">...</div>
//console.log(gameEl.children[4].children) //HTMLCollection(5) [div.tile, div.tile, div.tile, div.tile, div.tile]
//console.log(gameEl.children[4].children[1]) //<div class="tile">...</div>

//gameEl.children[4].children[0].textContent = "U";
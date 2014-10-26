"use strict";

/**
 * Splits a text into words by separating paragrapgs by "|" (pipe) and sentenced by " " (space)
 */
function splitText(t) {
    return t.split("|")
        .map(function (el) {
            return el.split(" ");
        })
        .reduce(function (words, sentence) {
            words.push("");
            for (var i = 0; i < sentence.length; i++) {
                words.push(sentence[i]);
            }
            return words;
        });
}

var fc_words = splitText($('#foreign_content').text());
var oc_words = splitText($('#own_content').text());

var interValId;

function showNextWord() {
    var nextFcWord = fc_words.shift();
    var nextOcWord = oc_words.shift();
    $('#foreign').html(nextFcWord);
    $('#own').html(nextOcWord);
    if (fc_words.length == 0) {
        window.clearInterval(interValId);
    }
}

document.getElementById('audio').play();
interValId = window.setInterval(showNextWord, 1000);

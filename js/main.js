fc = $('#foreign_content').text();
oc = $('#own_content').text();
fc_words = fc.split(" ");
oc_words = oc.split(" ");

var interValId;

function showNextWord()
{
  var nextFcWord = fc_words.shift();
  var nextOcWord = oc_words.shift();
  $('#foreign').html(nextFcWord);
  $('#own').html(nextOcWord);

  console.log("showNextWord");
  if(fc_words.length == 0) {
    window.clearInterval(interValId);
  }
}

interValId = window.setInterval(showNextWord, 1000);

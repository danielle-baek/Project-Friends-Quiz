<<<<<<< HEAD
function proceed (n) {
=======
const data = require('../questions.json')

function proceed(quesNum, ansNum) {
>>>>>>> ae055625ee11d2b084ac6a1fd191a94bea1fdd5e
  var form = document.createElement('form')
  form.setAttribute('method', 'post')
<<<<<<< HEAD
  form.setAttribute('action', '/friends/' + (n + 1))
=======
  form.setAttribute('action', '/friends/' + (quesNum+1))
>>>>>>> ae055625ee11d2b084ac6a1fd191a94bea1fdd5e
  form.style.display = 'hidden'
  document.body.appendChild(form)
  form.submit()
}
<<<<<<< HEAD
=======

function getCharacter (qNum, aNum) {
  let char = 'C' + aNum
  data.Questions[qNum - 1].char
}
>>>>>>> ae055625ee11d2b084ac6a1fd191a94bea1fdd5e

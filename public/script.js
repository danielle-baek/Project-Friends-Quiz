const data = require('../questions.json')

function proceed(quesNum, ansNum) {
  var form = document.createElement('form')
  form.setAttribute('method', 'post')
  form.setAttribute('action', '/friends/' + (quesNum+1))
  form.style.display = 'hidden'
  document.body.appendChild(form)
  form.submit()
}

function getCharacter (qNum, aNum) {
  let char = 'C' + aNum
  data.Questions[qNum - 1].char
}
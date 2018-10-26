<<<<<<< HEAD
// const data = require('../questions.json')
// const character 

// function proceed(quesNum, ansNum) {

//   var form = document.createElement('form')
//   form.setAttribute('method', 'post')
//   form.setAttribute('action', '/friends/' + (quesNum + 1))
//   form.style.display = 'hidden'
//   document.body.appendChild(form)
//   form.submit()
// }

// function getCharacter (qNum, aNum) {
//   let char = 'C' + aNum
//   character = data.Questions[qNum - 1][char]
// }

// // function returnChar {
// //   return chara
// // }

// module.exports = character
// getCharacter(3, 1)
=======
//const data = require('../questions.json')
// const fs = require('fs')

function proceed (quesNum, ansNum) {
  // fs.writeFile('./answers.json', JSON.stringify(document.getElementById('value').innerHTML), 'utf8', function (err) {
  //   if (err) {
  //     // eslint-disable-next-line no-console
  //     return console.log(err)
  //   }
  // })
  var form = document.createElement('form')
  form.setAttribute('method', 'post')
  form.setAttribute('action', '/friends/' + (quesNum + 1))
  form.style.display = 'hidden'
  document.body.appendChild(form)
  form.submit()
}
>>>>>>> 9696aff15dd3e3f13f809e69c18151d8e95f32df

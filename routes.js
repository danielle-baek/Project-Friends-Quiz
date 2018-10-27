const data = require('./questions.json')
const express = require('express')
const router = express.Router()
const scoreCharacters = require('./scoreCharacters')

router.get('/', (req, res) => {
  console.log('/friends/ route hit')
  res.redirect('/friends/home')
})

router.post('/11', (req, res) => {
  console.log('redirecting to results')
  res.redirect('/friends/results')
})

router.get('/11', (req, res) => {
  console.log('redirecting to results')
  res.redirect('/friends/results')
})

router.get('/home', (req, res) => {
  console.log('home route hit [routes.js]')
  res.render('./index.hbs')
})

router.get('/results', (req, res) => {
  console.log('hit results')
  res.render('./result.hbs')
})

router.post('/start', (req, res) => {
  console.log('redirecting to results')
  res.redirect('/friends/start')
})

//changed start to redirect to page 1 rather then rendering 1st Question
router.get('/start', (req, res) => {
  console.log('start route hit')
  res.redirect('/friends/1')
})
router.get('/1', (req, res) => {
  let id = req.params.id
  let ques = data.Questions[0]
  console.log('1st Question route hit')
  res.render('./questionsTest.hbs', ques)
})

router.post('/:id', (req, res) => {
  console.log('POST route+ID hit')
  let id = req.params.id
  let answer = req.params
  console.log('answer clicked ' + JSON.stringify(answer) + ' ID of the Q is ' + id)
  let nextQues = data.Questions[id]
  res.render('./questionsTest.hbs', nextQues)
})

// // changed id -1 to id
// router.get('/:id', (req, res) => {
//   let id = req.params.id
//   let ques = data.Questions[id -1]
//   console.log('questions route hit')
//   console.log(ques)
//   res.render('./questions.hbs', ques)
// })

// router.get('/:id', (req, res) => {
//   console.log('GET route+ID hit')
//   let id = req.params.id
//   let nextQues = data.Questions[id -1]
//   let answer = req.params.value
//   console.log('answer clicked ' + answer )
//   console.log('ID is ' + id )
//   res.render('./questionsTest.hbs', nextQues)
// })


  // router.post('/submit/:id', (req, res) => {
  //   console.log('redirecting to results')
  //   res.redirect('/friends/:id')
  // })



module.exports = router

//    Saving for later
//   function proceed (quesNum, ansNum) {
//     // fs.writeFile('./answers.json', JSON.stringify(document.getElementById('value').innerHTML), 'utf8', function (err) {
//     //   if (err) {
//     //     // eslint-disable-next-line no-console
//     //     return console.log(err)
//     //   }
//     // })
//     var form = document.createElement('form')
//     form.setAttribute('method', 'post')
//     form.setAttribute('action', '/friends/' + (quesNum + 1))
//     form.style.display = 'hidden'
//     document.body.appendChild(form)
//     form.submit()
// }
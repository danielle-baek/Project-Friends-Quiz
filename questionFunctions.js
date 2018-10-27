const data = require('./questions.json')
const express = require('express')
const score = require('./scoreCharacters')

const router = express.Router()

router.get('/:id', (req, res) => {
  let id = req.params.id
  let ques = data.Questions[id - 1]
  console.log('questions route hit')
    
  res.render('./questions.hbs', ques)
})

router.post('/:id', (req, res) => {
  let id = req.params.id
  let ques = data.Questions[id - 1]
  let answer = Object.keys(req.body)[0]
  let char = 'C' + answer[1]
  score.scoreCharacters(1, ques[char])
  
  let nextPg = parseInt(id) + 1
  res.redirect('/friends/' + nextPg)
})

module.exports = router

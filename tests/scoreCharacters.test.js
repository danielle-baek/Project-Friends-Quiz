const scoreCharacter = require('../scoreCharacters')

test('Is test file working?', () => {
  expect(true).toBeTruthy()
})

test ('Is the right character being returned', function () {
  const addPoints = 1
  const character = 'Joey'
  const expected = 'Joey'
  const actual = scoreCharacter(1, 'Joey')

    expect(actual).toBe(expected)
})

// test('scores a normal frame', function () {
//   const frame = [2, 3]
//   const expected = 5
//   const actual = game.scoreFrame(frame)
//   expect(actual).toBe(expected)
// })
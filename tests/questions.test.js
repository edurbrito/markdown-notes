/* eslint-disable no-undef */
const questions = require('../questions').questions

test('Only three questions', () => {
  expect(questions.length).toBe(3)
})

test('Filtering to lower case and no white spaces', () => {
  expect(questions[0].filter('Note')).toBe('note')
  expect(questions[0].filter('Q&A')).toBe('q&a')
  expect(questions[0].filter('Default Note')).toBe('defaultnote')
  expect(questions[0].filter('Q&A Note')).toBe('q&anote')

  expect(questions[1].filter('Note')).toBe('note')
  expect(questions[1].filter('Q&A')).toBe('q&a')
  expect(questions[1].filter('Default Note')).toBe('defaultnote')
  expect(questions[1].filter('Q&A Note')).toBe('q&anote')
})

test('Default creation of "./images" directory', () => {
  var q = questions.find(element => element.name === 'directory')

  expect(q.default).toBe(true)
})

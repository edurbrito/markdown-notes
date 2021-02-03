var questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What type of note?',
    choices: ['Note', 'Q&A'],
    filter: function (val) {
      return val.toLowerCase().replace(/\s/g, '').trim()
    }
  },
  {
    type: 'list',
    name: 'theme',
    message: 'What theme for the note?',
    choices: ['Default', 'Minimal'],
    filter: function (val) {
      return val.toLowerCase().replace(/\s/g, '').trim()
    }
  },
  {
    type: 'confirm',
    name: 'directory',
    message: 'Create "./images" directory?',
    default: true
  }
]

module.exports = { questions }

const InputView = require('./views/input_view.js');
const WordCount = require('./models/word_count.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const inputView = new InputView();
  inputView.bindEvents();

  const wordCount = new WordCount();
  wordCount.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});

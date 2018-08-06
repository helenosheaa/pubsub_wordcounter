const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCount:result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
  })
};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  if (result) {
    resultElement.textContent = `There were ${result} words in your input!`
  }
  else {
    resultElement.textContent = "You have not entered any words!"
  }
};

module.exports = ResultView;

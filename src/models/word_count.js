const PubSub = require ('../helpers/pub_sub.js');

const WordCount = function() {

}

WordCount.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-inputted', (evt) => {
    const inputtedText = evt.detail;
    const result = this.numberOfWords(inputtedText);
    PubSub.publish('WordCount:result', result);
  })
};

WordCount.prototype.numberOfWords = function (text) {
  let count = 0;
  for (let i = 0; i < text.length; i++){
    if (text[i] === " ")
      count = +1;
  }
  return count += 1;

};

module.exports = WordCount;

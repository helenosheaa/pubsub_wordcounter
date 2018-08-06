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
  textEntered = text.split(" ");
  for (let i = 0; i < textEntered.length; i++){
    if (textEntered[i] != "")
      count += 1;
  }
  return count;
};

module.exports = WordCount;

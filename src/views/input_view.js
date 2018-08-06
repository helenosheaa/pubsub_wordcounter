const PubSub = require('../helpers/pub_sub.js');

const InputView = function() {

}

InputView.prototype.bindEvents = function () {
  const form = document.querySelector('#wordcounter-form');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const input = document.querySelector('#text');
    const inputtedText = input.value;
    // console.log('Inputted text:', inputtedText);
    PubSub.publish('InputView:text-inputted', inputtedText);
  })
};

module.exports = InputView;

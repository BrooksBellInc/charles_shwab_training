const runPoll = (condition, options = {}) => {
  return new Promise((resolve, reject) => {
    let count = 0;

    if (typeof condition !== 'function' && typeof condition !== 'object') {
      reject(new Error(`invalid first parameter. expected type: 'function' or 'object' but found type: ${typeof condition}`));
    } else if (typeof condition === 'function' && typeof options !== 'object') {
      reject(new Error(`invalid second parameter. expected type: 'object' but found type: ${typeof options}`));
    } else {
      let _condition = null;
      let _options = null;

      if (typeof condition === 'function') {
        _condition = condition;
        _options = options;
      } else if (typeof condition === 'object') {
        _options = condition;
      }

      const {
        pollLimit = 100,
        duration = 50,
        elements = []
      } = _options;

      const elementsCondition = () => {
        let results = true;

        elements.forEach(elem => {
          if (document.querySelectorAll(elem).length === 0) {
            results = false;
          }
        });

        return results;
      };

      const fullPollCondition = () => {
        let result = false;

        if (typeof _condition === 'function') {
          result = (_condition() && elementsCondition());
        } else {
          result = elementsCondition();
        }

        return result;
      };

      const iterator = () => {
        if (count < pollLimit) {
          count += 1;
          if (fullPollCondition()) {
            let resolveValue = null;

            if (elements.length > 0) {
              resolveValue = [];

              elements.forEach(elem => {
                if (document.querySelectorAll(elem).length === 1) {
                  resolveValue.push(document.querySelector(elem));
                } else {
                  resolveValue.push(document.querySelectorAll(elem));
                }
              });
            }

            resolve(resolveValue);
          } else {
            setTimeout(() => {
              iterator();
            }, duration);
          }
        } else {
          reject(new Error('poll timed out'));
        }
      };

      iterator();
    }
  });
};

/**
 * ADD YOUR TEST CODE IN THE FUNCTION BELOW
 * 1) Update the herospace header text from "Today, get closer to your goals." to "Get closer to your goals."
 * 2) Update the herospace CTA button text from "Open a Brokerage Account" to "Open a Brokerage Account Today"
 * 3) Move the section with header text "Easily trade and manage investments..." to directly below the herospace/blue section.
 * 4) Use Optimizely utils to ensure you are waiting for elements to exist on the page before executing code.
 * 5) Fire an Adobe Analytics custom link metric using s.tl(). Ensure this call completes successfully by looking in the Network tab.
 */

const executeTest = () => {

};


const pollCondition = () => { 
  return !!window.optimizely &&
  !!window.optimizely.get;
}

runPoll(pollCondition).then(executeTest);


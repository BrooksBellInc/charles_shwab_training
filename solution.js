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
// BEGIN CS TEST CODE
const executeTest = () => {
  const utils = window.optimizely.get('utils');
  const heroCTA = '.bcn-button--open-an-account';
  const heroHeaderText = '.bcn-h1';
  const benefitsContainer = '.component_container section:nth-of-type(5)';
  const heroContainer = '.component_container section:nth-of-type(2)';

  // adds event listener to the Add Brokerage account button
  const addCTAListener = () => {
    utils.waitUntil(() => {
      return !!window.s &&
      !!window.s.tl;
    }).then(function () {
      document.querySelector(heroCTA).addEventListener('click', () => {
        s.tl(this, 'o', 'BB_brokerage_CTA_Click');
      });
    });
  };

   // Update herospace items
  utils.waitUntil(() => {
    return !!document.querySelector(heroCTA) &&
    !!document.querySelector(heroHeaderText);
  }).then(() => {
    document.querySelector(heroHeaderText).innerText = 'Get closer to your goals.';
    document.querySelector(heroCTA).innerText = 'Open a Brokerage Account Today';
    addCTAListener();
  });
  
  // Move features content
  utils.waitUntil(() => {
    return !!document.querySelector(benefitsContainer) &&
    !!document.querySelector(heroContainer);
  }).then(() => {
    document.querySelector(heroContainer).after(document.querySelector(benefitsContainer));
  });

};

const pollCondition = () => { 
  return !!window.optimizely &&
  !!window.optimizely.get;
}
runPoll(pollCondition).then(executeTest);
















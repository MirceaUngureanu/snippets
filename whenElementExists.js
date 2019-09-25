function callIfElementExists(selector, callback) {

  var element = document.querySelector(selector);

  if (element) {
    callback(element);
    return true;
  }

  return false;
}

function whenElementExists(selector, callback) {

  if (!callIfElementExists(selector, callback)) {

    var observer = new MutationObserver(function(mutations) {
      if (callIfElementExists(selector, callback)) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
  }
}

module.exports = {
  whenElementExists: whenElementExists
}function callIfElementExists(selector, callback) {

  var element = document.querySelector(selector);

  if (element) {
    callback(element);
    return true;
  }

  return false;
}

function whenElementExists(selector, callback) {

  if (!callIfElementExists(selector, callback)) {

    var observer = new MutationObserver(function(mutations) {
      if (callIfElementExists(selector, callback)) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
  }
}

module.exports = {
  whenElementExists: whenElementExists
}function callIfElementExists(selector, callback) {

  var element = document.querySelector(selector);

  if (element) {
    callback(element);
    return true;
  }

  return false;
}

function whenElementExists(selector, callback) {

  if (!callIfElementExists(selector, callback)) {

    var observer = new MutationObserver(function(mutations) {
      if (callIfElementExists(selector, callback)) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
  }
}

module.exports = {
  whenElementExists: whenElementExists
}
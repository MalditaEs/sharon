var jsonp = require('@borodean/jsonp');

module.exports = function (base0, base1, callbacks) {
  return function (url, callback) {
    if (arguments.length < 2) {
      callback = url;
      url = location;
    }

    var id = String(callbacks.length);

    jsonp({
      url: base0 + encodeURIComponent(url) + base1 + id,
      parameter: false,
      object: callbacks,
      key: id
    }, callback);
  };
};

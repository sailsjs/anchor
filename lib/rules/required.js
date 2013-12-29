var check = require('validator').check;

module.exports = {

  validate: function (x) {
    // Transform data to work properly with node validator
    if (!x && x !== 0) {
      x = '';
    } else if (typeof x.toString !== 'undefined') {
      x = x.toString();
    } else {
      x = '' + x;
    }
    return check(x).notEmpty();
  },
  message: '{0} is required.'
};
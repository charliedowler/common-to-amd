(function() {
  'use strict';

  function convert(contents) {
    return ['define(function(require, exports, module) {', contents, '});'].join('');
  }
  if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = convert;
  } else if (typeof define !== 'undefined') {
    define(function(require, exports, module) {
      module.exports = convert;
    }, []);
  } else if (typeof window !== 'undefined') {
    window.common_to_js = convert;
  }
})();

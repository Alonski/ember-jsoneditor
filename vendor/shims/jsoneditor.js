(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['jsoneditor'],
      __esModule: true,
    };
  }

  define('jsoneditor', [], vendorModule);
})();

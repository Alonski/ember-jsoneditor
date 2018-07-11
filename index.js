'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');


module.exports = {
  name: 'ember-jsoneditor',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/jsoneditor.js');
    app.import('vendor/shims/jsoneditor.js');

    // app.import(app.bowerDirectory + '/jsoneditor/dist/jsoneditor.js');
    // app.import(app.bowerDirectory + '/jsoneditor/dist/jsoneditor.css');
    // app.import(app.bowerDirectory + '/jsoneditor/dist/img/jsoneditor-icons.svg', {
    //   destDir: 'assets/img'
    // });

  },
  treeForVendor(vendorTree) {
    var jsonEditorTree = new Funnel(path.join(this.project.root, 'node_modules', 'jsoneditor'), {
      files: ['jsoneditor.js'],
    });

    return new MergeTrees([vendorTree, jsonEditorTree]);
  },
};

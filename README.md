# Ember JSON Editor [![npm version](https://badge.fury.io/js/ember-jsoneditor.svg)](http://badge.fury.io/js/ember-jsoneditor)

> Ember component for [JSON Editor](https://github.com/josdejong/jsoneditor/) to view, edit and format JSON.

**Live demo**: http://glavin001.github.io/ember-jsoneditor/

---
## Installation

```
ember install ember-jsoneditor
```

## Usage

```handlebars
{{json-editor json=model mode=mode name=name}}
```

For a complete example, see the [dummy test app in `tests/dummy/app/`](https://github.com/Glavin001/ember-jsoneditor/tree/master/tests/dummy/app).

## Documentation

See [jsoneditor](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md) for configuration details.  ember-jsoneditor supports the following jsoneditor options:


  Option | Description |Default
  -------|-------------|-------
  change | maps to jsoneditor's onChange event | null
  error | maps to jsoneditor's onError event | null
  history | Enables history undo/redo button | true
  indentation | number of indentation spaces | 2
  mode |  Editor mode - modes | tree
  modes | Drop down to select editor mode.  Options: 'tree', 'view', 'form', 'code', 'text' | All options
  name | Field name for the JSON root node,| null
  search | boolean - show editor search box | true

Example for using event options

```javascript
// app/controllers/application.js
import Controller from '@ember/controller';

export default Controller.extend({
   /// ....
   actions: {
    myError(error){
      alert(`Error: ${error}`)
    },

    itChanged() {
      alert("The Data Changed!");
    }
  }
})
```

```javascript
// app/templates/application.hbs

{{json-editor json=model mode=mode name=name change=(action 'itChanged') error=(action 'myError')}}

```

## Development

* `git clone <repository-url>` this repository
* `cd my-addon`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

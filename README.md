# isfunc
A lightweight function allows to check if a JavaScript value is a function, with fallback solution for environments that return incorrect `typeof` operator results.

##Instllation
```
npm install isfunc
```

##Node/CommonJS
```javascript
var isFunction = require('isfunc');
isFunction(isFunction);//true
isFunction(function(){});//true
isFunction('function');//false
```

##AMD
```javascript
require(['isfunc'], function(isFunction){
  isFunction(isFunction);//true
  isFunction(function(){});//true
  isFunction('function');//false
});
```

##Global
```html
<script src="isfunc/index.js"></script>
```
```javascript
Function.isFunction(Array);//true
Function.isFunction(function(){});//true
Function.isFunction('function');//false
```
# archer-vue-alert
A vue alert component for qingcheng mobile projects.

# Usage

```JavaScript
var VueAlert = require('archer-vue-alert');
Vue.use(VueAlert);
```

# Basic use:

```JavaScript
vm.$alert({
    title: 'alertTitle',
    message: 'alertMessage',
    confirmTxt: 'confirm btn txt' //default is OK
});
```
# archer-vue-alert

> A vue alert component for qingcheng mobile projects.

![demo.png](http://ww2.sinaimg.cn/large/006tKfTcjw1f6xru8xlpsj309p06s747.jpg)


## Usage

```JavaScript
var VueAlert = require('archer-vue-alert');
Vue.use(VueAlert, [options]); // global options and only confirmTxt supported
```

### Basic use:

```JavaScript
/*
* @usage
* vm.$alert(options)
*
* @warn
* options.message support raw_html
* it can easily lead to XSS attacks.
* only use it on trusted content
* on user-provided content
*/

vm.$alert({
    title: 'alertTitle',
    message: 'alertMessage', //message accepts string and raw_html
    confirmTxt: 'confirm btn txt' //default is 'OK'
}).then(function(){

})
```

### Changelog
* v1.0.4 support global options setting(support vue 1.0)
* v2.0.0 support vue 2.0+
* v2.0.1 fix bug,support promise

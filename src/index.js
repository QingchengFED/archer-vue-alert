
function alert(Vue, options={}) {

    var AlertConstructor = Vue.extend(require('./alert.vue'));
    var alertInstance = null;
    var _deferred = null;

    Object.defineProperty(Vue.prototype, '$alert', {

        get: function () {

            return (config) => {
                if (alertInstance) return;

                _deferred = new Promise(function (resolve, reject) {
                    alertInstance = new AlertConstructor({
                        el: document.createElement('div'),
                        data() {
                            return {
                                title: config.title,
                                message: config.message,
                                confirmTxt: config.confirmTxt || options.confirmTxt || 'OK'
                            };
                        },
                        methods: {
                            confirm (){
                                alertInstance.$el.remove();
                                alertInstance = null;
                                resolve({data: 'confirm'})
                            }
                        }
                    });

                    document.body.appendChild(alertInstance.$el);
                });


                return _deferred
            };
        }

    });

}

module.exports = alert;

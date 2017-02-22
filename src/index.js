
function alert(Vue, options={}) {

    var AlertConstructor = Vue.extend(require('./alert.vue'));
    var alertInstance = null;

    Object.defineProperty(Vue.prototype, '$alert', {

        get: function () {

            return (config) => {
                if (alertInstance) return;
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
                            alertInstance.$remove()
                            alertInstance = null
                        }
                    }
                });
                alertInstance.$appendTo(document.body);
            };
        }

    });

}

module.exports = alert;

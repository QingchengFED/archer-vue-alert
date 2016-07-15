
function alert(Vue) {

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
                            confirmTxt: config.confirmTxt || 'OK'
                        };
                    },
                    methods: {
                        confirm (){
                            alertInstance.$remove()
                        }
                    }
                });
                alertInstance.$appendTo(document.body);
            };
        }

    });

}

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(alert);
}

module.exports = alert;
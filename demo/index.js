/**
 * Created by wangxiaottt on 16/8/18.
 */
import alert from '../dist/index'

Vue.use(alert, {confirmTxt: "好的"});

new Vue({
    el: '#app',
    data () {
        return {}
    },
    methods: {
        showTitleAlert (){
            this.$alert({title: 'only Title'})
        },
        showMessageAlert (){
            this.$alert({title: 'Title', message: 'this is message'})
        },
        showRawHtmlAlert () {
            var _self = this;

            this.$alert({title: 'raw Html', message: 'please click, <a href="tel: 1122112222">1122112222</a>'}).then(function(event){
                alert('promise resolve');
            })
        }
    }
})

/**
 * Created by wangxiaottt on 16/8/18.
 */
import alert from '../dist/index'

Vue.use(alert)

new Vue({
    el: 'body',
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
            this.$alert({title: 'raw Html', message: 'please click, <a href="tel: 1122112222">1122112222</a>'})
        }
    }
})
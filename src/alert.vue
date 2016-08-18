<template>
    <div class="g-layerWrap">
        <div class="m-alert">
            <div class="alert-mainWrap">
                <div class="alert-titleWrap" v-show="title">
                    <h3 class="title f-bw">{{title}}</h3>
                </div>
                <div class="alert-ctnWrap" v-show="message">
                    <p class="ctn f-bw">
                        {{{message}}}
                    </p>
                </div>
            </div>
            <div class="alert-btnWrap retainbt">
                <button  class="btn" v-on:click="confirm()" type="button">{{confirmTxt}}</button>
            </div>
        </div>
    </div>
</template>

<style>
    @media screen and (min-width: 320px) {
        html {
            font-size: 10px;
        }
    }

    @media screen and (min-width: 375px) {
        html {
            font-size: 12px;
        }
    }

    @media screen and(min-width: 414px) {
        html {
            font-size: 14px;
        }
    }

    @media screen and(min-width: 600px) {
        html {
            font-size: 16px;
        }
    }
</style>

<style  lang="less" scoped>
    @import "alert.less";
</style>

<script type="text/ecmascript-6" lang="babel">
    export default {

    };
</script>
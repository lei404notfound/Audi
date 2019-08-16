<template>
 <div class="app-container">
    <head-er v-if="header_show"></head-er>
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
    <foot-er v-if="footer_show"></foot-er>
 </div>
</template>
<script>
import Header from "./components/audi/Header"
import Footer from "./components/audi/Footer"
export default {
    data(){
        return {
            header_show:true,
            footer_show:true
        }
    },
    components:{
        "head-er":Header,
        "foot-er":Footer
    },
    methods:{
        header(bool){
            this.header_show=bool;
        },
        footer(bool){
            this.footer_show=bool;
        }
    }
}
</script>

<style>
   .app-container{
     padding-top:0;
     padding-bottom:0;
     overflow-x:hidden;
   }
 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>

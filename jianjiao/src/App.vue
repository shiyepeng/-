<template>
  <div id = "app">
        <router-view></router-view>
      <footerbar v-if = "$store.state.isCreate">
        <ul class="uls">
          <router-link to="/home" activeClass="active" tag="li">
            <img src="/static/imgs/home.png" class="imgs">
            <span>首页</span>
          </router-link>
          <router-link to="/category" activeClass="active" tag="li">
            <img src="/static/imgs/category.png" class="imgs">
            <span>分页</span>
          </router-link>
          <router-link to="/buycar" activeClass="active" tag="li">
              <img src="/static/imgs/buy.png" class="imgs">
              <span>购物车</span>          
            </router-link>
          <router-link to="/news" activeClass="active" tag="li">
              <img src="/static/imgs/message.png" class="imgs">
              <span>消息</span>
          </router-link>
          <router-link to="/me" activeClass="active" tag="li">
              <img src="/static/imgs/me.png" class="imgs">
              <span>我</span>
          </router-link>
        </ul>
      </footerbar>
  </div>
</template>

<script>
  import footerbar from "./components/footerbar";
  
  export default {
    data(){
      return {
        isCreate:true
      }
    },
    methods:{
      
    },
    mounted(){
      // this.$store.commit('kerwinchangestate' , true)
    },
    components:{
      footerbar
    },
    computed:{

    }
}
</script>
  
<style>
  *{
    margin:0px;
    padding:0px;
  }
  html,body{
    height: 100%;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration:none;
  }

  .uls{
    display: flex;
    position: fixed;
    width:100%;
    left:0;
    bottom:0;
    text-align: center;
    background-color: white;
    z-index: 100;

  }
  .uls li{
    flex:1;
  }
  .imgs{
    display:block;
    width:0.23rem;
    margin-left: auto;
    margin-right: auto;
  }
  
</style>

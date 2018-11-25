<template>
  <div>
    <header class="header noborder">
      <!-- 添加搜索框 -->
      <div id="searchInfor">
        <img src="/static/imgs/searchIcon-e103f6f03f8488bbc144da2ef8684396.png" id="searchIcon">
        <input type="search" name="searchInput" placeholder="搜索我的尖叫好评">
      </div>
    </header>
    <ul>
      <img src="/static/imgs/furniture.png" alt="">
      <li v-for="data in dataList" @click="handleClick(data.id)">
         <router-link tag="li" activeClass="" to="" >
           <span>{{data.name}}</span>
         </router-link>
      </li>

      <img src="/static/imgs/household.png" alt="">
      <li v-for="data1 in dataList1" @click="handleClick(data1.id)">
         <router-link tag="li" activeClass="" to="" >
           <span>{{data1.name}}</span>
         </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data(){
    return {
      dataList:[
        {name:'沙发',id:20},
        {name:'椅凳',id:21},
        {name:'桌几',id:22},
        {name:'床',id:23},
        {name:'餐桌',id:24},
        {name:'茶几和边桌',id:25},
        {name:'书桌',id:26}
      ],
      dataList1:[
        {name:'灯具',id:27},
        {name:'用餐',id:28},
        {name:'时尚生活',id:29},
        {name:'烹饪',id:30},
        {name:'纺织品',id:31},
        {name:'家饰',id:32},
        {name:'卫浴',id:33}
      ]
    }
  },
  components:{

  },
  mounted(){
    this.$store.commit('wteng' , true)
  },
  methods:{
    handleClick(id){
      this.$router.push(`/inner/${id}`)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  img{
    margin-top:10px;
    width:100%;
  }
  ul{
      list-style:none;
      padding-left:0;
  }
  li{
      height:50px;
      line-height:50px;
      font-size:18px;
      border-bottom:1px solid #ccc;
      text-indent:15px;
    }
  .header{
    background:#fff;
    height:0.44rem;
    line-height: 0.44rem;
    box-sizing: border-box;
    position:relative;
    padding:0rem 0.1rem 0rem 0.1rem;
  }
  .noborder{
    border-bottom: 0px;
  }

  .header img {
    display:inline-block;
    width:0.26rem;
    margin-top:0.03rem;
    margin-bottom: 0.03rem;
    vertical-align:middle;
  }
  .header img.logo{
    display: inline-block;
    width:0.65rem;
    vertical-align: middle;
  }
  #searchInfor{
    display:inline-block;
    width:2.7rem;
    height:0.28rem;
    line-height: 0.28rem;
    vertical-align: middle;
    background-color:#f5f5f5;
    border-radius:0.15rem;
    margin-left:0.075rem;
    margin-bottom:0.025rem;
  }
  #searchInfor input{
    background-color: #f5f5f5;
    display:inline-block;
    width:80%;
    height:0.27rem;
    border:none;
  }
  #searchIcon{
    display:inline-block;
    width:0.2rem;
    vertical-align: middle;
    margin:0 0.05rem;
  }
  
  
</style>

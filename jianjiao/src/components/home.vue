<template>
  <div>
      <advertising @wt="wangteng" v-show="isShow"></advertising>
      <navbar></navbar>
      <topbar></topbar>
  </div>
</template>

<script>
  import navbar from "./navbar";
  import topbar from "./topbar";
  import advertising from"./advertising";
  export default {
    data(){
      return {
        isShow:true,
      }
    },
    methods:{
      wangteng(){
        this.isShow =!this.isShow
      }
    },
    mounted(){
      this.$store.commit('wteng' , true)
    },
    components:{
      navbar,
      topbar,
      advertising
    },
    computed:{

    }
}
</script>
  
<style>
  
</style>

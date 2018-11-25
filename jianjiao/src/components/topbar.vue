<template>
	<div>
			<ul class="titlelist">
        		<li v-for="data,index in dagelist" @click="changeshow(index)" :class="current===index?'active':''">{{data}}</li>
     		</ul>
    		<recommended v-if="current === 0?true:false"></recommended>
      		<furniture v-if="current === 1?true:false"></furniture>
      		<household v-if="current === 2?true:false"></household>
      		<activity v-if="current === 3?true:false"></activity>
	</div>
</template>

<script type="text/javascript">
	import recommended from "./recommended";
	import furniture from "./furniture";
	import household from "./household";
	import activity from "./activity";
	export default{
		data(){
			return{
				name:'首页',
        		isshow:true,
        		dagelist:['推荐','家具','家居','活动'],
        		current:0
			}
		},
		methods:{
			changeshow(id){
       			 this.current = id
      		}
		},
		components:{
			recommended,
			furniture,
			household,
			activity
		}
	}
</script>

<style type="text/css" scoped>
	*{
		margin:0px;
		padding:0px;
	}
	ul{
		display:flex; 
		background:#fff;
		width:100%;
		height:0.4rem; 
		line-height: 0.4rem;
		overflow:hidden;  
	}
	li{ 
		flex:1; 
		color:#808080; 
		font-size:0.14rem; 
		text-align: center;
		z-index: 100; 
	}
	
	.active{
		border-bottom:0.03rem solid #202020; 
		color:#000;  
		height:0.37rem;
	}
</style>
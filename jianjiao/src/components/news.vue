<template>
	<div>
		<header class="header">
			<a href="" class="header-left">
				<img src="/static/imgs/home.png">
			</a>
			<h3>登录</h3>
			<a href="" class="header-div-right">注册</a>
		</header>
		<div id="leftTabBox">
			<div class="hd">
				<ul>
					<li v-for="data,index in list" @click="changeshow(index)" :class="current===index?'on':''">{{data}}</li>
				</ul>
				<passwordlogin v-if="current === 0?true:false"></passwordlogin>
				<smslogin v-if="current === 1?true:false"></smslogin>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import passwordlogin from "./passwordlogin";
	import smslogin from "./smslogin"
	export default{
		data(){
			return{
				current:0,
				list:['密码登录','短信登录'],

			}
		},
		methods:{
			changeshow(index){
				this.current = index;
			}
		},
		mounted(){
			this.$store.commit('wteng' , false)
		},
		components:{
			passwordlogin,
			smslogin
		}
	}
</script>

<style type="text/css" scoped>
	.header{
		background:#fff;
		height:0.44rem;
		line-height:0.44rem;
		-webkit-box-sizing:border-box;
		position:relative;
		padding:0rem 0.1rem 0rem 0.1rem;
		border-bottom:1px solid #f5f5f5;

	}
	.header-left{
		display:inline-block;
		width:0.32rem;
		height:0.32rem;
		line-height:0.25rem;
		position:absolute;
		left:0.2rem;
		top:50%;
		-webkit-transform:translateY(-50%);
		border-radius:50%;
	}
	.header img{
		display:inline-block;
		width:0.26rem;
		margin-top:0.03rem;
		margin-bottom:0.03rem;
		vertical-align:middle;
	}
	.header h3{
		position:absolute;
		left:50%;
		top:50%;
		-webkit-transform:translate(-50%,-50%);
		font-size:0.17rem;
		margin:0;
		padding:0;
		border:0;
	}
	.header-div-right{
		display:inline-block;
		height:0.32rem;
		font-size:0.15rem;
		line-height:0.32rem;
		position:absolute;
		right:0.1rem;
		top:50%;
		-webkit-transform:translateY(-50%);
		border-radius:50%;
		color: #000;
	}
	.hd{
		height:0.44rem;
		line-height: 0.44rem;
		font-size:20px;
		background:#fcfcfc;
		box-sizing: border-box;
	}
	.hd ul{
		background:#fcfcfc;
		height:0.44rem;
		overflow: hidden;
		display:flex;
	}
	.hd ul li{
		flex:1;
		margin:0 0.46rem;
		font-size:0.14rem;
		padding:0 0.12rem;

	}
	#leftTabBox {
		width:3.45rem;
		margin:0 auto;
		background-color:#fff;
		margin-top:0.15rem;
		height:1.45rem;
	}
	.on{
		border-bottom:0.03rem solid #202020;
		color:#000;
	}
</style>
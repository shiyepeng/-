<template>
	<div>
		<div class="panel" id="openAppPanel" style="display: block;">
		<button class="close" id="closePanel" @click="handleClick">
			<i class="iconfont icon-wrong"></i>
		</button>
		<div id="openAppNow">
			<div class="logo"></div>
			<div class="text">
				<p class="p1">尖叫设计APP</p>
				<p class="p2">生活即风格</p>
			</div>
			<div id="openAppNowBtn" class="button">
				<a id="openAppLink" href="javascript:;">立即打开</a>
			</div>
		</div>
	</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {

			}
		},
		methods:{
			handleClick(){
				this.$emit("wt");
			}
		},
		components:{

		},
		computed:{

		}
	}
</script>

<style type="text/css" scoped>
	.panel {
		width:100%;
		height:0.4rem;
		color:#000;
		background-color:#fcfcfc;
		border-bottom: 1px solid #eaeaea;
		-webkit-box-sizing:border-box;
	}
	.panel div.close {
		line-height: 0.3rem;
		text-align:center;
		font-size:0.17rem;
		margin:0 0.1rem;
		width:7%;
		float: left;
	}
	.panel div.close i {
		font-size:0.18rem;
	}
	#openAppNow {
		width:85%;
		position: relative;
	}
	.panel div.logo {
		width:0.3rem;
		height:0.3rem;
		background:url() no-repeat center center;
		background-size:0.3rem 0.3rem;
		margin-right:0.08rem;
		margin-top:0.04rem;
	}
	.panel div.text {
		width:1rem;
		font-size: 0.14rem;
		margin-right:0.05rem;
		
	}
	.panel div.text .p1{
		font-family: "PingFangTC-Semibold";
		font-size: 0.15rem;
		line-height: 0rem;
		display:block;
		position: absolute;
		left:0.8rem;
		top:-0.3rem;
	}
	.panel div.text .p2{
		font-family: "PingFangTC-Semibold";
		font-size: 0.1rem;
		line-height: 0rem;
		display:block;
		position: absolute;
		left:0.8rem;
		top:-0.15rem;
	}
	.panel div.button {
		width:0.78rem;
		height:0.24rem;
		line-height:0.24rem;
		text-align: center;
		color:#000;
		background:#ffd444;
		font-size:0.13rem;
		margin-left:0.7rem;
		position: absolute;
		right:0.1rem;
		top:-0.35rem;
	}
	a {
		text-decoration: none;
		color:#000;
	}
	button{
		display: block;
		width:0.4rem;
		height:0.4rem;
		border:none;
		background-color:white;
		left:0rem;
		top:0rem;
	}
</style>
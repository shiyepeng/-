<template>
	<div>
		<header class="header noborder">
			<img class="logo" src="/static/imgs/titleView.png">
			<!-- 添加搜索框 -->
			<div id="searchInfor">
				<img src="/static/imgs/searchIcon-e103f6f03f8488bbc144da2ef8684396.png" id="searchIcon">
				<input type="search" name="searchInput" placeholder="搜索我的尖叫好评">
			</div>
		</header>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{

		},
		components:{

		}
	}
</script>

<style type="text/css"  scoped>
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
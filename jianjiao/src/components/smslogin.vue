<template>
	<div>
		
		<div class="frombox">
	        <div class="up up3">
	           <input type="text" name="telephoneNumber" placeholder="请输入手机号" class="phone" id="phone2">
	           <div class="huoqu">
	              <input type="password" name="yanzhengma" placeholder="请输入6位短信验证码" id="yanzhengma2">
	              <input type="button" id="btn-huoqu2" name="button" value="忘记密码?" placeholder="忘记密码?">
	           </div>
	       </div>
		</div>
		<input type="button" id="loginBtn" name="submit" value="确认">
		<a  class="register" style="top: 2.9rem;">快速注册</a>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style type="text/css" scoped>
	.frombox{
		width:3.45rem;
		box-sizing: border-box;
	}
	.up{
		width:3.45rem;
		padding:0 0.15rem;
		-webkit-box-sizing:border-box;
		background-color:#fff;
		z-index: 5;
		color:#000;
		margin:0 auto;
	}
	.up input{
		width:100%;
		height:0.5rem;
		border-bottom:1px solid #eaeaea;
		font-size: 0.14rem;
		color:#000;
		font-family: 'PingFangSC-Regular';
		border:none;
		margin-bottom:0.1rem;
		margin-top: 0.1rem;
	}
	.huoqu {
		position: relative;
	}
	.up input[name="button"] {
		width:1rem;
		height:0.5rem;
		border:none;
		position: absolute;
		right:0rem;
		top:0;
		padding:0;
		text-align: right;
		cursor: pointer;
		background: white;
	}
	input[name="submit"] {
		margin:0 auto;
		vertical-align: middle;
		width:3.45rem;
		height:0.44rem;
		background-color: #ffd444;
		font-size: 0.14rem;
		position:absolute;
		top:2.5rem;
		border:none;
	}
	.register{
		display: block;
		position:absolute;
		right:0.15rem;
		color:#000;
		font-size: 0.14rem;
		font-family: 'PingFangSC-Regular';
	}
</style>
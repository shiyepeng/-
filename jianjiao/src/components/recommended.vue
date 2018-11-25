<template>
	<div>
		<div class="swiper-container b">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide" v-for="data in looplist">
	      	<img :src="data.bannerImgSrc">
	      </div>
	    </div>
	    <!-- Add Pagination -->
	    	<!-- <div class="swiper-pagination"></div> -->
	    </div>
  		<div class="banner-group-and-product-record" v-for="data in list">
	        <div class="page-module-title">
	            <h1>{{data.moduleName}}</h1>
	            <h3>{{data.moduleDescription}}</h3>
	        </div>
	        <div class="page-module banner-group-fixed-portrait">
	            <div class="banner">
	            	<a v-if="data.moduleContent.banners"> 
	                    <img :src="data.moduleContent.banners[0].bannerImgSrc" style="display: block;">
	                </a>
	            </div>
	        </div>
	        <div class="product-list">
	            <ul class="clearfix">
	                <li v-if="data.moduleContent.products.length < 4" v-for="datachild in data.moduleContent.products">
	                		<img :src="datachild.productImg" style="display: block;">
	                        <p class="product-list-title">{{datachild.productTitle}}</p>
	                        <div class="product-list-price">
								<span class="sale-price">{{datachild.originalPrice}}</span>
	                        </div>
	                </li>
	            </ul>
	            <div class="swiper-container a clearfix">
				    <div class="swiper-wrapper">
					      <div class="swiper-slide" v-if="data.moduleContent.products.length > 4" v-for="datas in data.moduleContent.products">
							  <img :src="datas.productImg" style="display: block;">
							  <p class="product-list-title">{{datas.productTitle}}</p>
				    		  <div class="product-list-price">
							     <span class="sale-price">{{datas.originalPrice}}</span>
							  </div>
				          </div>
				    </div>
				</div>
	        </div>
   		 </div>
	</div>
</template>

<script type="text/javascript">
	import Swiper from "swiper";
	import "_swiper@4.4.1@swiper/dist/css/swiper.css"
	import axios from "axios"
	export default{
		data(){
			return{
				looplist:[],
				list:[]
			}
		},
		mounted(){
			axios.get("/v2/page?pageId=1&tabId=1&_=1539772701687").then(res=>{
				console.log(res.data.data.modules[0].moduleContent.banners[0].bannerImgSrc);
				this.looplist = res.data.data.modules[0].moduleContent.banners;
				this.$nextTick(res=>{
					var swiper = new Swiper('.b', {
							slidesPerView: 1,
							spaceBetween: 30,
							loop: true,
							pagination: {
							el: '.swiper-pagination',
							clickable: true,
							},
							autoplay: {
								delay: 2000,
								disableOnInteraction: false,
							}
						});
				})
			})
			axios.get("/v2/page?pageId=1&tabId=1&_=1539772701687").then(res=>{
				this.list = res.data.data.modules;
				this.list = this.list.slice(1);
				this.$nextTick(res=>{
						var swiper = new Swiper('.a', {
							slidesPerView: 3,
							spaceBetween: 30,
							loop: true,
							pagination: {
							el: '.swiper-pagination',
							clickable: true,
							},
							autoplay: {
								delay: 2000,
								disableOnInteraction: false,
						}
					});
				})
					
			})
				
			

			// 解决跨域问题
		},
		methods:{

		},
		components:{

		}
	}
	
</script>

<style type="text/css">
	.swiper-container{
		
	}
	img{
			width: 100%;
		}
	.banner-group-and-product-record{
		background:#fff;
		margin-bottom:0.15rem;
	}	
	.page-module-title {
		padding:0.13rem 0rem 0rem;
	}
	.page-module-title h1{
		font-weight: bold;
		font-size:0.18rem;
		color:#333;
		margin:0.15rem 0;
		text-align: center;
	}
	.page-module-title h3{
		font-size: 0.12rem;
		color: #808080;
		margin-bottom: 0.1rem;
		text-align: center;
	}
	.page-module {
		margin-bottom: 0;
	}
	.banner-group-fixed-portrait{
		padding:0.15rem 0.15rem 0rem;
	}
	.clearfix{
		zoom:1;
	}
	.product-list li {
		float:left;
		width:30%;
		padding-left: 0.12rem;
		margin-bottom: 0.30rem;
	}
	.product-list-title {
		width:100%;
		margin:0.05rem 0rem 0rem;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		display: -webkit-box;
		-webkit-line-clamp:1;
		-webkit-box-orient:vertical;
		font-size: 0.12rem;
	}
	.product-list-price {
		text-align:center;
	}
	.sale-price {
		font-size: 0.12rem;
	}
	
</style>
<template>
	<div>
		<div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide" v-for="data in kooplist">
	      	<img :src="data.bannerImgSrc">
	      </div>
	    </div>
	    <!-- Add Pagination -->
	    <div class="swiper-pagination"></div>
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
				kooplist:[]
			}
		},
		mounted(){
			axios.get("/v2/page?pageId=1&tabId=10010&_=1539775099863").then(res=>{
				console.log(res.data.data.modules[0].moduleContent.banners[0].bannerImgSrc)
				this.kooplist = res.data.data.modules[0].moduleContent.banners;
				this.$nextTick(res=>{

					var swiper = new Swiper('.swiper-container', {
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
			

			// 解决跨域问题
		},
		methods:{

		},
		components:{

		}
	}
	
</script>

<style type="text/css">
	
</style>
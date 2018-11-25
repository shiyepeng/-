import Vue from "vue"	
import Vuex from "vuex"

Vue.use(Vuex);


const store = new Vuex.Store({
	state:{
		isCreate:true
	},
	mutations:{
		wteng(state , payload){   
		        //第一个参数为state对象，第二个为commit方法的第二个参数
			console.log("我被调用了");
			state.isCreate = payload
		}
	}
})
export default store;
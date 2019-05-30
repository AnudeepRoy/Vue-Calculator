
Vue.component('num',{
	template:`
		<button type='button' class='btn btn-info btn-block' @click="$emit('add')"><slot></slot></button>
	`
});

Vue.component('opr',{
	template:`
		<button type='button' class='btn btn-dark btn-block' ><slot></slot></button>
	`
})

var app = new Vue({
	el:'#root',
	data:{
		result:[],
		
		
	},
	methods:{
		addNum(num){
			this.result.push(num);
			
		},

		clearAll(){
			this.result = [];
		}
	}
	
})
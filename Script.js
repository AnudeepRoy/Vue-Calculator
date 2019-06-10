
Vue.component('num',{
	template:`
		<button type='button' class='btn btn-info btn-block' @click="$emit('add')"><slot></slot></button>
	`
});

Vue.component('opr',{
	template:`
		<button type='button' class='btn btn-dark btn-block' @click="$emit('add')"><slot></slot></button>
	`
});

Vue.component('calci',{
	template:`
		<button type='button' class='btn btn-success btn-block' @click="$emit('add')"><slot></slot></button>
	`
});

var app = new Vue({
	el:'#root',
	data:{
		result:'',
	},

	methods:{
		addNum(num){
			this.result = this.result + num;
		},

		clearAll(){
			this.result = [];
		},

		addSym(sym){
			if(this.result.length != 0 || sym == '.'){
			this.result = this.result + sym;
			}
		},
		calculate(){
			this.result = eval(String(this.result));
		}
	}
	
})

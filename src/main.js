import Vue from 'vue';
import App from './App.vue';
// import { MyButton, MyInput } from '../module2/my-ui';
import MyUI from '../module2/my-ui';

// Vue.use(MyButton);
// Vue.use(MyInput);

// Vue.use(MyUI, {
// 	components: ['MyButton', 'MyInput'],
// }); //按需加载
Vue.use(MyUI); //全局注册
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');

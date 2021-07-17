import Button from './Button';
import Input from './Input';
const MyUI = {};

const ALL_COMPONENTS = [Button, Input];

MyUI.install = function(Vue, options) {
	/*
    有Vue即可以访问
    Vue.component
    Vue.directive
    Vue.mixin
    
    options，即是，在Vue.use(),的第二个参数
    按需引入就是从这个确定

    Vue.use(MyUI, {
	    components: ['Button', 'Input'],
    });

    options =>{components: ['Button', 'Input']}
  */
	// console.log(`options`, options);
	// -----------------------------------------------------
	// 用于理解逻辑
	if (options && options.components) {
		const components = options.components;
		components.forEach(componentName => {
			ALL_COMPONENTS.forEach(component => {
				if (componentName === component.name) {
					Vue.component(component.name, component);
				}
			});
		});
	} else {
		ALL_COMPONENTS.forEach(component => {
			Vue.component(component.name, component);
		});
	}
};
export default MyUI;

/* 
常用的方式
const MyButton = {};
const MyInput = {};
MyButton.install = Vue => Vue.component(Button.name, Button);
MyInput.install = Vue => Vue.component(Input.name, Input);
export { MyButton, MyInput };


调用
import { MyButton, MyInput } from '../module2/my-ui';
Vue.use(MyButton);
Vue.use(MyInput);
*/

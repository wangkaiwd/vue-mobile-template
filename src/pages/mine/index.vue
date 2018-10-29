<template>
  <div class="mine">
    我的
    <router-link to='/'>home</router-link>
    <button @click="handleClick">上</button>
    <button @click="handleClick1">中</button>
    <button @click="handleClick2">下</button>
  </div>
</template>

<script>
const LENGTH = 5
console.log('global', LENGTH) // 这段代码只会执行一次
export default {
	name: 'VMine',
	mounted() {
		// this.$message('I am toast')
		console.log('mounted', LENGTH) // mounted钩子函数会在每次页面渲染的时候执行
	},
	methods: {
		handleClick() {
			this.$message('I want to go sky', {
				autoClose: false,
				closeButton: {
					text: '关闭'
				}
			})
		},
    handleClick1() {
			this.$message('I want to go sky', {
				autoClose: false,
        position: 'middle',
				closeButton: {
					text: '关闭'
				}
			})
		},
    handleClick2() {
			this.$message('I want to go sky', {
				autoClose: false,
        position: 'bottom',
				closeButton: {
					text: '关闭'
				}
			})
		}
	}
}
</script>

<style lang="less" scoped>
</style>

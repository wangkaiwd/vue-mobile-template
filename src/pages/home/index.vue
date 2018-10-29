<template>
  <div class="home">
    <h2>首页</h2>
    <router-link to="/mine">
      to mine
    </router-link>
    <div class="input-wrapper">
      <form>
        <input type="text" v-model="userName"><br/>
        <input type="password" v-model="password"><br/>
        <input type="number" v-model="checkCode">
        <button @click="onSubmit($event)">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
import FormValidator from '@/utils/formValidator'
console.log('home')
export default {
	name: 'VHome',
	data() {
		return {
			userName: '',
			password: '',
			checkCode: ''
		}
	},
	methods: {
		validatorFunc() {
			const validator = new FormValidator()

			validator.add(this.userName, ['isNonEmpty', 'minLength:6'], '用户名')
			validator.add(this.password, 'isNonEmpty', '密码')
			validator.add(
				this.checkCode,
				[{ rule: 'isNonEmpty' }, { rule: 'maxLength:6' }],
				'haha'
			)
			const errorMsg = validator.start()
			return errorMsg
		},
		onSubmit(e) {
			const errorMsg = this.validatorFunc()
			if (errorMsg) {
				alert(errorMsg)
				return
			}
			console.log('success')
			// 发起请求，进行接口层面的校验
		}
	}
}
</script>

<style lang="less" scoped>
.input-wrapper {
	padding: 10px;
	input {
		margin: 10px;
	}
}
</style>

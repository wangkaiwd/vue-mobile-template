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
        <button @click="onSubmit($event)">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
import FormValidator from "@/utils/formValidator";
console.log("home");
export default {
  name: "VHome",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    validatorFunc() {
      const validator = new FormValidator();
      validator.add(this.userName, [
        {
          rule: "isNonEmpty",
          errorMsg: "用户名不能为空"
        },
        {
          rule: "minLength:6",
          errorMsg: "用户名最小长度为6位"
        }
      ]);
      validator.add(this.password, {
        rule: "isNonEmpty",
        errorMsg: "密码不能为空"
      });
      const errorMsg = validator.start();
      return errorMsg;
    },
    onSubmit(e) {
      const errorMsg = this.validatorFunc();
      if (errorMsg) {
        alert(errorMsg);
        return;
      }
      console.log("success");
      // 发起请求，进行接口层面的校验
    }
  }
};
</script>

<style lang="less" scoped>
.input-wrapper {
  padding: 10px;
  input {
    margin: 10px;
  }
}
</style>

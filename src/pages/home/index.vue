<template>
  <div class="home">
    <h2>首页</h2>
    <router-link to="/mine">
      to mine
    </router-link>
    <div class="input-wrapper">
      <form>
        <label for="">用户名</label><input type="text" v-model="userName"><br/>
        <label for="">密码</label><input type="password" v-model="password"><br/>
        <label for="">验证码</label><input type="number" v-model="checkCode">
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
      password: "",
      checkCode: ""
    };
  },
  methods: {
    validatorFunc() {
      const validator = new FormValidator();

      validator.add(this.userName, ["isNonEmpty", "minLength:6"], "用户名");
      validator.add(this.password, "isNonEmpty", "密码");
      validator.add(
        this.checkCode,
        [{ rule: "isNonEmpty" }, { rule: "maxLength:6" }],
        "验证码"
      );
      const errorMsg = validator.start();
      return errorMsg;
    },
    onSubmit(e) {
      const errorMsg = this.validatorFunc();
      if (errorMsg) {
        this.$message(errorMsg);
        return;
      }
      this.$message("successs");
      // 发起请求，进行接口层面的校验
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  .input-wrapper {
    padding: 10px;
    input {
      margin: 10px;
    }
  }
}
</style>

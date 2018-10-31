<template>
  <transition :name="`slide-${position}`">
    <div v-show="visibleToast" class="my-toast" :class="`position-${position}`">
      <div class="content">{{message}}</div>
      <div class="close-button" v-if="closeButton">
        <span @click="onClickClose">
          关闭
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MyToast",
  props: {
    message: {
      //提示信息
      type: String,
      required: true
    },
    autoClose: {
      // 是否自动关闭
      type: Boolean,
      default: true
    },
    closeDelay: {
      // 自动关闭延时
      type: String | Number,
      default: 2
    },
    closeButton: {
      // 关闭按钮
      type: Object,
      required: false
    },
    position: {
      // 提示位置
      type: String,
      default: "top",
      validator(val) {
        return ["top", "middle", "bottom"].includes(val);
      }
    }
  },
  data() {
    return {
      visibleToast: true
    };
  },
  mounted() {
    this.handleAutoClose();
  },
  methods: {
    close() {
      this.visibleToast = false;
      setTimeout(() => {
        // 删除dom元素
        this.$el.remove();
        // 完全销毁一个实例
        this.$destroy();
      }, 400);
    },
    onClickClose() {
      this.close();
      const { callback } = this.closeButton;
      if (typeof callback === "function") {
        callback();
      }
    },
    handleAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, Number(this.closeDelay) * 1000);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@toast-min-height: 0.4rem;
@toast-bg: #edf2fc;
@toast-border: #ebeef5;
@toast-text-color: #909399;
@white: #fff;
.my-toast {
  display: flex;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid @toast-border;
  color: @toast-text-color;
  // 由于可能写多行文字，这里内容高度不能写死
  min-height: 0.4rem;
  // line-height:用于设置多行元素的空间量，比如文本。对于块级元素，它指定元素行盒的最小高度
  // 取值：数字，数字乘以该元素的字体大小。计算值和指定值结果相同
  line-height: 1.8;
  background-color: @toast-bg;
  &.slide-top-leave-active,
  &.slide-bottom-leave-active {
    transition: all 0.4s;
  }
  &.slide-top-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  &.slide-bottom-leave-to {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  @keyframes slideTop {
    0% {
      transform: translate(-50%, -100%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
  @keyframes slideBottom {
    0% {
      transform: translate(-50%, 100%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
  &.position-top {
    top: 0.1rem;
    animation: slideTop 0.4s;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 0.1rem;
    animation: slideBottom 0.4s;
  }
  .content {
    padding: 0.08rem 0.16rem;
    word-break: break-all;
  }
  .close-button {
    display: flex;
    align-items: center;
    // 这里不设置高度或者高度设置为auto会自动撑满容器（align-items的默认值:stretch）
    // 错误写法
    // height: 100%;
    border-left: 1px solid #fff;
    // 默认：flex-shrink:1;会缩小  flex-grow: 0; 不会放大
    flex-shrink: 0;
    span {
      cursor: pointer;
      display: inline-block;
      padding: 0.08rem 0.16rem;
    }
  }
}
</style>

<template>
  <div class="my-toast">
    <div class="content">{{message}}</div>
    <div class="close-button">
      <span>
        关闭
      </span>
    </div>
  </div>
</template>

<script>
export default {
	name: 'MyToast',
	props: {
		message: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="less" scoped>
.my-toast {
	display: flex;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	// 由于可能写多行文字，这里内容高度不能写死
	min-height: 40px;
	// line-height:用于设置多行元素的空间量，比如文本。对于块级元素，它指定元素行盒的最小高度
	// 取值：数字，数字乘以该元素的字体大小。计算值和指定值结果相同
	line-height: 1.8;
	background-color: pink;
	.content {
		padding: 8px 16px;
	}
	.close-button {
		display: flex;
		align-items: center;
		border-left: 1px solid #fff;
		flex-shrink: 0;
		span {
			display: inline-block;
			padding: 8px 16px;
		}
	}
}
</style>

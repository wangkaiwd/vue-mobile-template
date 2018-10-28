import regExpConfig from './regConfig'
class FormValidator {
  cache = []
  add(value, rules, prefix) {
    if (this.rulesIsArray(value, rules, prefix)) return
    this.ruleIsObject(rules, value, prefix)
  }
  start() {
    for (let i = 0, len = this.cache.length; i < len; i++) {
      let errorMsg = this.cache[i]()
      if (errorMsg) return errorMsg
    }
  }
  rulesIsArray(value, rules, prefix) {
    if (toString.call(rules) === '[object Array]') {
      rules.map(item => {
        if (this.ruleIsObject(item, value, prefix)) return
        const array = item.split(':')
        const tempMsg = () =>
          validatorRules[array[0]](value, undefined, prefix, array[1])
        this.cache.push(tempMsg)
      })
      return true
    }
  }
  ruleIsObject(item, value, prefix) {
    if (toString.call(item) === '[object Object]') {
      const { rule, errorMsg } = item
      const array = rule.split(':')
      const tempMsg = () =>
        validatorRules[array[0]](value, errorMsg, prefix, array[1])
      this.cache.push(tempMsg)
      return true
    }
  }
}

const validatorRules = {
  // 内容是否为空
  isNonEmpty(value, errorMsg, prefix = '') {
    console.log('object', prefix)
    let tip = errorMsg || `${prefix}不能为空`
    return value.trim() === '' ? tip : void 0
  },
  isMobile(value, errorMsg, prefix = '') {
    const tip = errorMsg || `${prefix}不符合要求`
    return regExpConfig.mobile.test(value) ? tip : void 0
  },
  minLength(value, errorMsg, prefix = '', length) {
    const tip = errorMsg || `${prefix}长度不能小于${length}`
    return value.length < length ? tip : void 0
  },
  maxLength(value, errorMsg, prefix = '', length) {
    const tip = errorMsg || `${prefix}长度不能大于${length}`
    return value.length > length ? tip : void 0
  }
}
export default FormValidator
// 整体思路：
//  1. new Validator()类
//  2. 添加校验参数
//  3. 开始执行校验函数
//  4. 校验函数执行完成后如果返回错误信息，进行提示，否则校验通过

// 使用方法
//  1. 校验参数为对象
//  2. 校验参数为数组，数组的每一项为对象
//  3.

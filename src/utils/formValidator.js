import regExpConfig from './regConfig'
class FormValidator {
  cache = []
  add(value, rules) {
    if (toString.call(rules) === '[object Array]') {
      rules.map(({ rule, errorMsg }) => {
        const array = rule.split(':')
        const tempMsg = validatorRules[array[0]](value, errorMsg, array[1])
        this.cache.push(tempMsg)
      })
      return
    }
    const errorMsg = validatorRules[rules.rule](value, rules.errorMsg)
    this.cache.push(errorMsg)
  }
  start() {
    for (let i = 0; i < this.cache.length; i++) {
      let errorMsg = this.cache[i]
      if (errorMsg) {
        return errorMsg
      }
    }
  }
}


const validatorRules = {
  // 内容是否为空
  isNonEmpty(value, errorMsg) {
    return value.trim() === '' ? errorMsg : void 0
  },
  isMobile(value, errorMsg) {
    return regExpConfig.mobile.test(value) ? errorMsg : void 0
  },
  minLength(value, errorMsg, length) {
    return value.length > length ? errorMsg : void 0
  }
}
export default FormValidator
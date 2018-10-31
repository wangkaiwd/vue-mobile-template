/**
 *  动态设置根元素thml的font-size
 * 这里： 1rem = 50px;
 * 对应到二倍图设计稿： 页面元素大小 = 设计图元素尺寸 / 100 rem;
 */
(function (doc, win) {
  const html = document.documentElement
  const setRem = () => {
    clearTimeout(timerId)
    const timerId = setTimeout(() => {
      const { width } = html.getBoundingClientRect()
      if (!width) { return }
      html.style.fontSize = width / 7.5 + 'px'
    }, 100)
  }
  win.addEventListener('resize', setRem)
  doc.addEventListener('DOMContentLoaded', setRem)
}(document, window))

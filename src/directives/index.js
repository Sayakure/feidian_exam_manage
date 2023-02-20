// 负责管理所有的自定义指令
// 只负责导出指令对象
// 变量名称就是指令名称
export const imagerror = {
  inserted(dom, options) {
    dom.onerror = function() {
      dom.src = options.value
    }
  }
}

// 防抖，用到了闭包
// 防抖，n秒内只能触发一次，若n秒内再次触发，则从新触发的时间点重新开始计时。
function debounce(fn, delay = 300) {
  let timer = null;
  return function() {
    if(timer) {
      // 事件未到再次触发则清除计时器，重新开始计时
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(this, ...arguments);
      timer = null;
    }, delay);
  }
}

// 节流
// 一段时间内只能执行一次。
function throttle(fn, delay = 300) {
  let timer = null;
  return function() {
    if(timer) return;
    timer = setTimeout(() => {
      fn.call(this, ...arguments);
      // 执行后将timer置为null
      timer = null;
    }, delay);
  }
}
Function.prototype._apply = function(context, arr) {
    <!-- 类型判断 -->
    if (typeof this !== 'function') throw new TypeError('error');
    <!-- 确保context有值 -->
    context = context || window;
    <!-- 将被劫持者赋值给劫持者属性方法，改变this -->
    context.fn = this;
    let result;
    if (!arr || arr.length <= 0) {
        result = context.fn();
    } else {
        let args = Array.form(argument).slice(1);
        result = context.fn(...args);
    }
}
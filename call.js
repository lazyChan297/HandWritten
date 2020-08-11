<!-- 
    1、判断被绑定者是否为函数
    2、判断绑定者不为空
    3、缓存传入的参数
    4、将被劫持的函数赋值给劫持者的属性方法，劫持者调用新增的属性方法实现this等于劫持者
    5、定义result缓存返回值
    6、删除劫持者新增的属性方法
 -->

Function.prototype._call = function(context) {
    <!-- 类型判断 -->
    if (typeof this !== 'function') throw new TypeError('error');
    <!-- 确保context有值 -->
    context = context || window
    <!-- 缓存其他参数，因为call入参不确定 -->
    let args = Array.form(argument).slice(1);
    <!-- 为劫持者添加fn属性赋值为当前this -->
    context.fn = this;
    <!-- 缓存被劫持函数可能会有返回值 -->
    let result = context.fn(...args);
    <!-- 还原入参 -->
    delete context.fn;
    return result;
}
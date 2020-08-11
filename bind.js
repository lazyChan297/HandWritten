
<!-- 
    1、判断被绑定者是否为函数
    2、判断绑定者不为空
    3、缓存绑定时的参数
    4、函数被绑定函数this
    5、返回调用时的函数，并获取调用时的入参
    6、判断是new调用还是直接调用，如果是new，则将this绑定给当前实例
    7、将被绑定函数原型继承给返回调用时的函数
 -->
Function.prototype._bind = function(context) {
    <!--  类型判断 -->
    if (typeof this !== 'function') throw new TypeError('error');
    <!-- 确保新绑定this存在  -->
    context = context || winodw; 
    <!-- 缓存被劫持函数 -->
    let that = this;
    <!-- 缓存绑定时入参 -->
    let args = Array.form(arguments).slice(1);
    <!-- bind时是返回函数，而不是立即调用 -->
    let boundFunc = function() {
        <!-- 缓存调用时入参 -->
        let boundArgs = Array.form(arguments);
        <!-- 判断调用方式是new还是直接调用，
            如果this的constructor等于绑定值，则是new，需要将this绑定到实例上，
            否则绑定到context
        -->
        return that.call(this.constructor === context ? this : context, args.concat(boundArgs));
    }
    <!-- 创建一个空函数 -->
    function Func() {}
    <!-- 缓存被劫持函数的原型 -->
    Func.prototype = this.prototype;
    <!-- 主动劫持函数继承被劫持函数原型 -->
    boundFunc.prototype = new F();
    return boundFunc;
}
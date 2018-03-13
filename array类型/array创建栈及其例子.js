//栈被用在编程语言的编译器和内存中保存变量、方法调用等。

function Stack() {
    var items = [];

    this.push = function(){
        //添加一个（或几个）新元素到栈顶
         items.push();
    };

    this.pop = function(){
        //移除栈顶的元素，同时返回被移除的元素
        return items.pop();
    };

    this.peek = function(){
        //返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）

        return items[items.length - 1];
    };

    this.isEmpty = function () {
        //如果栈里没有任何元素就返回true，否则返回false
        return items.length == 0;
    }
    this.clear = function () {
        //移除栈里的所有元素
        return items =  [];
    }

    this.size = function () {
        //返回栈里的元素个数
        return items.length;
    }

    this.print = function(){
        //输出栈里的元素
        console.log(items.toString());
    };
};

//10进制 转换为 2进制
function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';
   while (decNumber > 0){
       rem = Math.floor(decNumber % 2 );// Math.floor总是将数值向下舍入为最接近的整数
       remStack.push(rem);
       decNumber = Math.floor(decNumber / 2)
   }
   while (!remStack.isEmpty()){
       binaryString += remStack.pop().toString()
   }
   return binaryString
}

//10进制 转换为 多进制
function  baseConverter( decNumber,base) {
    var remStack = new Stack(),
        rem,
        baseString = ''
        digits = '0123456789ABCDEF';//转化16进制数字
    while (decNumber > 0){
        rem = Math.floor(decNumber % base );
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base)
    }
    while (!remStack.isEmpty()){
        baseString +=digits[remStack.pop()];
    }
    return baseString
}

//括号匹配
function matches(open, close){
    var opens = "([{",
        closers = ")]}";
    return opens.indexOf(open) == closers.indexOf(close);
}
//indexOf()方法都是从一个字符串中搜索给定的子字符串，然后返子字符串的位置（如果没有找到该子字符串，则返回-1）。
function parenthesesChecker(symbols){

    var stack = new Stack(),
        balanced = true,//这个判断很重要
        index = 0,
        symbol, top;

//for(index = 0 ;index < symbols.length; index++ )

    while (index < symbols.length && balanced){
        symbol = symbols.charAt(index);// charAt()方法以单字符字符串的形式返回给定位置的那个字符
        if (symbol == '('|| symbol == '[' || symbol == '{'){
            stack.push(symbol);
        } else {
            if (stack.isEmpty()){
                balanced = false;
            } else {
                top = stack.pop();//symbol为{([中一个
                if (!matches(top, symbol)){
                    //symbol为])}中一个
                    balanced = false;
                }
            }
        }
        index++;
    }
    if (balanced && stack.isEmpty()){
        return true;
    }
    return false;
}

console.log(parenthesesChecker('{{([][])}()}'));
console.log(parenthesesChecker('[{()]'));

//汉诺塔问题
//该问题的主要材料包括三根高度相同的柱子和一些大小及颜色不同的圆盘，三根柱子分别为起始柱A、辅助柱B及目标柱C。
function towerOfHanoi(n, from, to, helper){

    if (n > 0){
        towerOfHanoi(n-1, from, helper, to);
        to.push(from.pop());
        console.log('-----')
        console.log('Source: ' + from.toString());
        console.log('Dest: ' + to.toString());
        console.log('Helper: ' + helper.toString());
        towerOfHanoi(n-1, helper, to, from);
    }
}

var source = new Stack();
source.push(3);
source.push(2);
source.push(1);

var dest = new Stack();
var helper = new Stack();

towerOfHanoi(3, source, dest, helper);

source.print();
helper.print();
dest.print();

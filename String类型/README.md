# String类型 
---
String 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列，即字符串。字符串可以由双引号（"）或单引号（'）表示 。
字符字面量String 数据类型包含一些特殊的字符字面量，也叫转义序列，用于表示非打印字符，或者具有其他用途的字符。 
```
var text = "This is the letter sigma: \u03a3."; 
alert(text.length); // 输出 28
```
这个属性返回的字符数包括 16 位字符的数目。**如果字符串中包含双字节字符**，那么 length 属性可能不会精确地返回字符串中的字符数目。即使字符串中包
含双字节字符（不是占一个字节的 ASCII 字符），每个字符也仍然算一个字符。
ECMAScript 中的**字符串是不可变的**，也就是说，字符串一旦创建，它们的值就不能改变。要改变
某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量，
```
var lang = "Java";
lang = lang + "Script";
```
数值、布尔值、对象和字符串值（没错，每个字符串也都有一个 toString()方法，该方法返回字
符串的一个副本）都有 toString()方法。但 **null 和 undefined** 值没有这个方法。 
在*调用数值的 toString()方法时，可以传递一个参数*：输出数值的基数。默认情况下， toString()方法以十进制格式返回数值的字符串表
示。而通过传递基数， toString()可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格式表示的字符串值。 
要转换的值是不是 null 或 undefined 的情况下，还可以使用**转型函数 String()，这个函数能够将任何类型的值转换为字符串**。 
 如果值有 toString()方法，则调用该方法（没有参数）并返回相应的结果；
 如果值是 null，则返回"null"；
 如果值是 undefined，则返回"undefined"。 
```
var value1 = 10;
var value2 = true;
var value3 = null;
var value4;
alert(String(value1)); // "10"
alert(String(value2)); // "true"
alert(String(value3)); // "null"
alert(String(value4)); // "undefined" 
```

## 字符方法
---
两个用于访问字符串中特定字符的方法是： charAt()和 charCodeAt()。这两个方法都接收一个
参数，即基于 0 的字符位置。其中， charAt()方法以单字符字符串的形式返回给定位置的那个字符 
```
var stringValue = "hello world";
alert(stringValue.charAt(1)); //"e 
alert(stringValue.charCodeAt(1)); //输出"101" 
```
可以使用方括号加数字索引来访问字符串中的特定字符
```
var stringValue = "hello world";
alert(stringValue[1]); //"e" 
```
## 字符串操作方法
 concat()，用于将一或多个字符串拼接起来，返回拼接得到的新字符串。 concat()方法可以接受任意多个参数，也就是说可以通过它拼接任意多个字符串。 
```
var stringValue = "hello ";
var result = stringValue.concat("world", "!");
alert(result); //"hello world!"
alert(stringValue); //"hello"
```
**虽然 concat()是专门用来拼接字符串的方法，但实践中使用更多的还是加号操作符（+）**


基于子字符串创建新字符串的方法： slice()、 substr()和 substring()。
这三个方法都会返回被操作字符串的一个子字符串，而且也都接受一或两个参数。第一个参数指定子字
符串的开始位置，第二个参数（在指定的情况下）表示子字符串到哪里结束。 
slice()和
substring()的第二个参数指定的是子字符串最后一个字符后面的位置。而 **substr()的第二个参数指定的则是返回的字符个数。 **
```
var stringValue = "hello world";
alert(stringValue.slice(3)); //"lo world"
alert(stringValue.substring(3)); //"lo world"
alert(stringValue.substr(3)); //"lo world"
alert(stringValue.slice(3, 7)); //"lo w"
alert(stringValue.substring(3,7)); //"lo w"
alert(stringValue.substr(3, 7)); //"lo worl" 
```
**slice()方法会将传入的负值与字符串的长度相加， substr()方法将负的第一个参数加上字符串的长度，而将负的第二个
参数转换为 0。最后， substring()方法会把所有负值参数都转换为 0.**
```
var stringValue = "hello world";
alert(stringValue.slice(-3)); //"rld"
alert(stringValue.substring(-3)); //"hello world"
alert(stringValue.substr(-3)); //"rld"
alert(stringValue.slice(3, -4)); //"lo w"
alert(stringValue.substring(3, -4)); //"hel"
alert(stringValue.substr(3, -4)); //""（空字符串） 
```
 ## 字符串位置方法
有两个可以从字符串中查找子字符串的方法： indexOf()和 lastIndexOf()。这两个方法都是从
一个字符串中搜索给定的子字符串，然后返子字符串的位置（如果没有找到该子字符串，则返回-1）。
这两个方法的区别在于： **indexOf()方法从字符串的开头向后搜索子字符串，而 lastIndexOf()方法
是从字符串的末尾向前搜索子字符串.**
```
var stringValue = "hello world";
alert(stringValue.indexOf("o")); //4
alert(stringValue.lastIndexOf("o")); //7
```
这两个方法都可以接收可选的第二个参数，表示从字符串中的哪个位置开始搜索。 
```
var stringValue = "hello world";
alert(stringValue.indexOf("o", 6)); //7
alert(stringValue.lastIndexOf("o", 6)); //4 

var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while(pos > -1){
positions.push(pos);
pos = stringValue.indexOf("e", pos + 1);
}
alert(positions); //"3,24,32,35,52 
```
trim()方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果。
```
var stringValue = " hello world ";
var trimmedStringValue = stringValue.trim();
alert(stringValue); //" hello world "
alert(trimmedStringValue); //"hello world" 
```
 ## 字符串大小写转换方法 

toLowerCase()、 toLocaleLowerCase()、 toUpperCase()和 toLocaleUpperCase()。 
```
var stringValue = "hello world";
alert(stringValue.toLocaleUpperCase()); //"HELLO WORLD"
alert(stringValue.toUpperCase()); //"HELLO WORLD"
alert(stringValue.toLocaleLowerCase()); //"hello world"
alert(stringValue.toLowerCase()); //"hello world" 
```
##字符串的模式匹配方法 

match()，在字符串上调用这个方法，本质上与调用 RegExp 的 exec()方法相同。 match()方法只接受一个参数，要么是一
个正则表达式，要么是一个 RegExp 对象 
```
var text = "cat, bat, sat, fat";
var pattern = /.at/;
//与 pattern.exec(text)相同
var matches = text.match(pattern);
alert(matches.index); //0
alert(matches[0]); //"cat"
alert(pattern.lastIndex); //0 
```
如果是调用 RegExp 对象的 exec()方法并传递本例中的
字符串作为参数，那么也会得到与此相同的数组：数组的第一项是与整个模式匹配的字符串，之后的每
一项（如果有）保存着与正则表达式中的捕获组匹配的字符串。 

search()方法的唯一参数与 match()方法的参数相同：由字
符串或 RegExp 对象指定的一个正则表达式。 search()方法返回字符串中第一个匹配项的索引；如果没
有找到匹配项，则返回-1。而且， search()方法始终是从字符串开头向后查找模式。
```
var text = "cat, bat, sat, fat";
var pos = text.search(/at/);
alert(pos); //1 
```
replace()方法接受两个参数：第一个参数可以是一个 RegExp 对象或者一个字符串（这个字符串不会被转换成正则表达式），
第二个参数可以是一个字符串或者一个函数。如果第一个参数是字符串，那么只会替换第一个子字符串。要想替
换所有子字符串，唯一的办法就是提供一个正则表达式，而且要指定全局（g）标志。
```
var text = "cat, bat, sat, fat";
var result = text.replace("at", "ond");
alert(result); //"cond, bat, sat, fat"
result = text.replace(/at/g, "ond");
alert(result); //"cond, bond, sond, fond" 
```
replace()方法的第二个参数也可以是一个函数。在只有一个匹配项（即与模式匹配的字符串）的
情况下，会向这个函数传递 3 个参数：模式的匹配项、模式匹配项在字符串中的位置和原始字符串。
```
function htmlEscape(text){
return text.replace(/[<>"&]/g, function(match, pos, originalText){
switch(match){
case "<":
return "<";
case ">":
return ">";
case "&":
return "&";
case "\"":
return """;
}
});
}
alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
//<p class="greeting">Hello world!</p> 
```
split()方法可以基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
分隔符可以是字符串，也可以是一个 RegExp 对象（这个方法不会将字符串看成正则表达式）。
split()方法可以接受可选的第二个参数，用于指定数组的大小，以便确保返回的数组不会超过既定大小。 
```
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(","); //["red", "blue", "green", "yellow"]
var colors2 = colorText.split(",", 2); //["red", "blue"]
var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""] 
```

 localeCompare()方法比较两个字符串，并返回下列值中的一个：
 如果字符串在字母表中应该排在字符串参数之前，则返回一个负数（大多数情况下是-1，
具体的值要视实现而定）；
 如果字符串等于字符串参数，则返回 0；
 如果字符串在字母表中应该排在字符串参数之后
，则返回一个正数（大多数情况下是 1，具体的值同样要视实现而定）。
```
var stringValue = "yellow";
alert(stringValue.localeCompare("brick")); //1
alert(stringValue.localeCompare("yellow")); //0
alert(stringValue.localeCompare("zoo")); //-1 
```
**因为 localeCompare()返回的数值取决于实现，所以最好是像下面例子所示
的这样使用这个方法。**
```
function determineOrder(value) {
var result = stringValue.localeCompare(value);
if (result < 0){
alert("The string 'yellow' comes before the string '" + value + "'.");
} else if (result > 0) {
alert("The string 'yellow' comes after the string '" + value + "'.");
} else { alert("The string 'yellow' is equal to the string '" + value + "'.");
}
}
determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo"); 
```
fromCharCode()方法的任务是接收一或多个字符编码，然后将它们转换成一个字符串。
从本质上来看，这个方法与实例方法 charCodeAt()
执行的是相反的操作。
```
alert(String.fromCharCode(104, 101, 108, 108, 111)); //"hello 
```

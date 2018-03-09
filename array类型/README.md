# Array 类型 
> * 检测数组 
    - Array.isArray()
>* 转换方法  
    - toString(),valueOf(),toLocaleString(),join()
> * 栈方法 
    - push(), pop()
> * 队列方法 
    - shift(), unshift()
> * 重排序方法 
    - reverse(), sort()
> * 操作方法 
    - concat(), slice(),splice()
> * 位置方法
    - indexOf(),lastIndexOf()
> * 迭代方法
    - every(),filter(),forEach(),map(),some()




------

除 Object类型 外， Array 类型是 ECMAScript中**最常用的类型**。ECMAScript中的数组与其他多数语言中的数组有着相当大的**区别** ,ECMAScript数组的 **每一项可以保存任何类型的数据**。 而且，ECMAScript **数组的大小是可以动态调整**。

创建数组的第一种基本方式是**使用 Array 构造函数**，在使用 Array 构造函数时也可以省略 new 操作符。如果预先知道数组要保存的项目数量，也可以给构造函数传递该数量，而该数量会自动变成 length属性的值。也可以向 Array 构造函数传递数组中应该包含的项。
```
var colors = Array(3); // 创建一个包含 3 项的数组
var names = Array("Greg"); // 创建一个包含 1 项，即字符串"Greg"的数组 
```
创建数组的第二种基本方式是**使用数组字面量表示法**。 在使用数组字面量表示法时，不会调用 Array 构造函数 
```
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
var names = []; // 创建一个空数组
var values = [1,2,]; // 不要这样！这样会创建一个包含 2 或 3 项的数组 
```
读取和设置数组的值时，要使用方括号并提供相应值的基于 0 的数字索引,方括号中的索引表示要访问的值。如果索引小于数组中的项数，则返回对应项的值 如果设置某个值的索引超过了数组现有项数，数组就会自动增加到该索引值加 1 的长度 
```
var colors = ["red", "blue", "green"]; // 定义一个字符串数组
alert(colors[0]); // 显示第一项
colors[2] = "black"; // 修改第三项
colors[3] = "brown"; // 新增第四项 
```
数组的项数保存在其 length 属性中 ,它的 length 属性不是只读的。因此，通过设置这个属性，可以从数组的末尾移除项或向数组中添加新项。由于数组最后一项的索引始终是 length-1，因此下一个新项的位置就是 length。每当在数组末尾添加一项后，其 length 属性都会自动更新以反应这一变化。 数组最多可以包含 4 294 967 295 个项 。 
```
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
colors.length = 2;
alert(colors[2]); //undefined 
```
数组通过数字进行索引，但有趣的是它们也是对象，所以也可以包含字符串键值和属性（但这些并不计算在数组长度内）：
```
var a = [ ];
a[0] = 1;
a["foobar"] = 2;
a.length; // 1
a["foobar"]; // 2
a.foobar; // 2
```
**特别注意**，如果字符串键值能够被强制类型转换为十进制数字的话，它就会被当作数字索引来处理。
```
var a = [ ];
a["13"] = 42;
a.length; // 14
```
**在数组中加入字符串键值 /属性并不是一个好主意。建议使用对象来存放键值 /属性值，用数组来存放数字索引值。** 

## 检测数组

---
Array.isArray()方法。这个方法的目的是最终确定某个值到底是不是数组，而不管它是在哪个全局执行环境中创建的。 
```
if (Array.isArray(value)){
//对数组执行某些操作
} 
```
## 转换方法

---
数组的 toString()方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串。而调用 valueOf()返回的还是数组。 toLocaleString()方法经常也会返回与 toString()和valueOf()方法相同的值，但也不总是如此。当调用数组toLocaleString()方法时，它也会创建一个数组值的以逗号分隔的字符串。不同之处在于，这一次为了取得每一项的值，调用的是每一项的 toLocaleString()方法。
```
var person1 = {
toLocaleString : function () {
return "Nikolaos";
},
toString : function() {
return "Nicholas";
}
};
var person2 = {
toLocaleString : function () {
return "Grigorios";
},
toString : function() {
return "Greg";
}
};
var people = [person1, person2];
alert(people); //Nicholas,Greg
alert(people.toString()); //Nicholas,Greg
alert(people.toLocaleString()); //Nikolaos,Grigorios 
```
如果使用 join()方法，则可以使用不同的分隔符来构建这个字符串。 join()方法只接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的字符串。如果数组中的某一项的值是 null 或者 undefined，那么该值在 join()、toLocaleString()、 toString()和 valueOf()方法返回的结果中以空字符串表示。
```
var colors = ["red", "green", "blue"];
alert(colors.join(",")); //red,green,blue
alert(colors.join("||")); //red||green||blue 
```
## 栈方法 

---
栈是一种可以限制插入和删除项的数据结构。栈是一种 LIFO（Last-In-First-Out，
后进先出）的数据结构，也就是最新添加的项最早被移除。 ECMAScript 为数组专门提供了 push()和 pop()方法，以便实现类似栈的行为。 
push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。
pop()方法则从数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。 


## 队列方法 

---
队列数据结构的访问规则是 FIFO（First-In-First-Out，先进先出）。队列在列表的末端添加项，从列表的前端移除项。 shift()，它能够移除数组中的第一个项并返回该项，同时将数组长度减 1 结合使用 shift()和 push()方法，可以像使用队列一样使用数组 
unshift()方法。顾名思义，unshift()与 shift()的用途相反：
它能在数组前端添加任意个项并返回新数组的长度。 
同时使用 unshift()和 pop()方法，可以从相反的方向来模拟队列，即在数组的前端添加项，从数组末端移除项 

## 重排序方法  

---
reverse()和 sort()， reverse()和 sort()方法的返回值是经过排序之后的数组。 
reverse()方法会反转数组项的顺序。
```
var values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); //5,4,3,2,1 
```
sort()方法按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。
为了实现排序， sort()方法会调用每个数组项的toString()转型方法，然后比较得到的字符串，以
确定如何排序。即使数组中的每一项都是数值， sort()方法比较的也是字符串，如下所示
```
var values = [0, 1, 5, 10, 15];
values.sort();
alert(values); //0,1,10,15,5 
```
sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。 
```
function compare(value1, value2) {
if (value1 < value2) {
return -1;
} else if (value1 > value2) {
return 1;
} else {
return 0;
}
} 
```
这个比较函数可以适用于大多数数据类型，只要将其作为参数传递给 sort()方法即可，
```
var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); //0,1,5,10,15 
```
可以通过比较函数
产生降序排序的结果，只要交换比较函数返回的值即可。
```
function compare(value1, value2) {
if (value1 < value2) {
return 1;
} else if (value1 > value2) {
return -1;
} else {
return 0;
}
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 15,10,5,1,0 
```
对于数值类型或者其 valueOf()方法会返回数值类型的对象类型 
```
function compare(value1, value2){
return value2 - value1;
} 
```
## 操作方法 
---

concat()方法可以基于当前数组中的所有项创建一个新数组。先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。
```
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
alert(colors); //red,green,blue
alert(colors2); //red,green,blue,yellow,black,brown 
```
slice()，它能够基于当前数组中的一或多个项创建一个新数组。 slice()方法可以
接受一或两个参数，即要返回项的起始和结束位置。 slice()方法不会影响原始数组。如果 slice()方法的参数中有一个负数，则用数组长度加上该数来确定相应的位置。

```
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
alert(colors2); //green,blue,yellow,purple
alert(colors3); //green,blue,yellow 
```
splice()方法，是最强大的数组方法，主要用途是向数组的中部插入项。参数：起始位置、 要删除的项数、要插入的项。  
  删除： splice(0,2)会删除数组中的前两项。
 插入：splice(2,0,"red","green")会从当前数组的位置 2 开始插入字符串"red"和"green"。
 替换：splice (2,1,"red","green")会删除当前数组位置 2 的项，然后再从位置 2 开始插入字符串"red"和"green"。
splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项（如果没有删除任何项，则返回一个空数组）。 

```
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); // 删除第一项
alert(colors); // green,blue
alert(removed); // red，返回的数组中只包含一项
removed = colors.splice(1, 0, "yellow", "orange"); // 从位置 1 开始插入两项
alert(colors); // green,yellow,orange,blue
alert(removed); // 返回的是一个空数组
removed = colors.splice(1, 1, "red", "purple"); // 插入两项，删除一项
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow，返回的数组中只包含一项位置方法 
```
indexOf()和 lastIndexOf()。这两个方法都接收两个参数：要查找的项和（可选的）表示查找起点位置的索引 。都返回要查找的项在数组中的位置，或者在没找到的情况下返回1。 比较第一个参数与数组中的每一项时，会使用全等操作符；也就是说，要求查找的项必须严格相等 
```
var numbers = [1,2,3,4,5,4,3,2,1];
alert(numbers.indexOf(4)); //3 
alert(numbers.lastIndexOf(4)); //5
alert(numbers.indexOf(4, 4)); //5
alert(numbers.lastIndexOf(4, 4)); //3
var person = { name: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];
alert(people.indexOf(person)); //-1
alert(morePeople.indexOf(person)); //0 
```
迭代方法 
 every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。
 filter()：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
 forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
 map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的 数组。

 some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。
以上方法都不会修改数组中的包含的值。 
每个方法都接收两个参数：要在每一项上运行的函数和（可选的）运行该函数的作用域对象——影响 this 的值。传入这些方法中的函数会接收三个参数：数组项的值、该项在数组中的位置和数组对象本身。根据使用的方法不同，这个函数执行后的返回值可能会也可能不会影响方法的返回值。 
```
var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.every(function(item, index, array){
return (item > 2);
});
alert(everyResult); //false

var someResult = numbers.some(function(item, index, array){
return (item > 2);
});
alert(someResult); //true 

var filterResult = numbers.filter(function(item, index, array){
return (item > 2);
});
alert(filterResult); //[3,4,5,4,3] 

var mapResult = numbers.map(function(item, index, array){
return item * 2;
});
alert(mapResult); //[2,4,6,8,10,8,6,4,2] 

numbers.forEach(function(item, index, array){
//执行某些操作
}); 
```
## 归并方法 

---
reduce()和 reduceRight()。这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。 reduce()方法从数组的第一项开始，逐个遍历到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。 这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。传给 reduce()和 reduceRight()的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。reduceRight()的作用类似，只不过方向相反而已。 
```
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
return prev + cur;
});
alert(sum); //15  
```


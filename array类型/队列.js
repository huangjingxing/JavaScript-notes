function Queue() {
    var items= [];
    this.enqueue = function(){
        //向队列尾部添加一个（或多个）新的项
        items.push();
    };

    this.dequeue = function(){
        //移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
        return items.shift();//shift方法会从数组中移除存储在索引0（第一个位置）的元素
    };

    this.front = function(){
        return items[0];//返回队列中第一个元素——最先被添加，也将是最先被移除的元素。
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    };

    this.print = function(){
        console.log(items.toString());
    };
}

//优先队列。元素的添加和移除是基于优先级的。
//实现一个优先队列，有两种选项：设置优先级，然后在正确的位置添加元素；或者用入列操作添加元素，然后按照优先级移除它们。

function PriorityQueue() {
    var items = [];
    function QueueElement (element, priority){
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function(element, priority){
        var queueElement = new QueueElement(element, priority);
        if (this.isEmpty()){
            //队列为空，可以直接将元素入列

            items.push(queueElement);
        } else {
            var added = false;
            for (var i=0; i<items.length; i++){
                if (queueElement.priority <
                    items[i].priority){
                    items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
                if (!added){ //添加元素的priority值大于任何已有的元素，把它添加到队列的末尾
                    items.push(queueElement);
                }
            }
        };
    }

    //循环队列——击鼓传花
    function hotPotato (nameList, num){
        var queue = new Queue();
        for (var i=0; i<nameList.length; i++){
            queue.enqueue(nameList[i]);
        }
        var eliminated = '';
        while (queue.size() > 1){
            for (var i=0; i<num; i++){
                queue.enqueue(queue.dequeue()); //给定一个数字，然后迭代队列。从队列开头移除一项，再将其添加到队列末尾
            }
            eliminated = queue.dequeue();// 模拟击鼓传花,一旦传递次数达到给定的数字，拿着花的那个人就被淘汰了
            console.log(eliminated + '在击鼓传花游戏中被淘汰。 ');
        }
        return queue.dequeue();//这个人就是胜者
    }
    var names = ['John','Jack','Camila','Ingrid','Carl'];
    var winner = hotPotato(names, 7);
    console.log('胜利者： ' + winner);

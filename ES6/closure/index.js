// -------------------closure------value ko jab second time call kro to wo retain rhti hai

// var sum = function(a){
// console.log("hello bhai" +a)
// var c=4;
// return function(b){

//     return a+b+c;

// }
// }
// var store = sum(2);
// console.log(store(5))

var sum =function(a,b,c){

    return{
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
return a+b+c;
       }
    }
}
var store=sum(3,4,5);
console.log(store.getSumTwo())
console.log(store.getSumThree())

var store=sum(6,7,8);
console.log(store.getSumTwo())
console.log(store.getSumThree())
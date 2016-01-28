//Create a function that can be used with sort. This function should take two strings, 
//and return a value that sort can use to determine which is the longest string. Finally, 
//create an array of strings and try to get it sorted using your new function.

var arr = ["I am the second string.", "I am the longest string. I am the longest string again."];
                        
arr.sort(function(a, b){
    if(a.length < b.length){
        return 1;
    } else if (a.length > b.length){
        return -1;
    }else {
        return 0;
    }
});

//Create an array of objects (don’t need to use new here, just regular object literals). 
//These objects will contain a name and email property. Then, run some code that will 
//sort your array by the longest name. Then, run some code that will sort your array by e-mail 
//address in alphabetical order.
var people = [
    {name: "aliyah", email: "aliyah@aliyahmaliyah.com"},
    {name: "kimberly", email: "kim@yahoo.ca"}
    ];
people.sort(function(a, b){
    if (a.name.length < b.name.length) {
        return 1;
    }
    else if (a.name.length > b.name.length) {
        return -1;
    } else {
        return 0;
    }
});

people.sort(function(a,b){
    if (a.email < b.email) {
        return -1;
    }
    else if (a.email > b.email) {
        return 1;
    } else {
        return 0;
    }
});

//Create a function that can be used with Array.prototype.map. This function should 
//take a number and return its square. Then, use this function with map on an array of 
//numbers to check the result.

var array = [2,4,6,8];
var squared= array.map(function(num) {
    return num * num;
});

//Create a function that can be used with Array.prototype.map. This function 
//should be able to take an object and square its “num” property. Then, use this 
//function with map on an array of objects each containing a “num” property.

var people1 = [
    {name: "aliyah", age: 29},
    {name: "linguini", age: 2},
    {name: "claire", age: 9},
    {name: "cole", age: 5}
    ];
var newArray = people.map(function(num){
   return num.age*num.age;
}); 


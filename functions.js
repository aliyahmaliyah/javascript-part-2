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



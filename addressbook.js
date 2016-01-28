function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = [];
}

function Email(address, type) {
    this.address = address;
    if (type === "work" || "home" || "other") {
        this.type = type;
    }
    else { 
        this.type = "other";
    }
}

Person.prototype = {
    addemail: function(a,b) {
    this.email.push(new Email(a,b));
}};
var aliyah = new Person("aliyah","jessa");
aliyah.addemail("aliyahjessa@gmail.com", "home");
console.log(aliyah);
//object creation methods
function Car (model, year, owner) {
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.aFunction = aFunction; //uses existing args
}

//creating an object
var lexus = new Car ("Lexus", 1999, "Ken");

//adding a new property
Car.prototype.color = null;

//Object.create method
var human = {
    //internal create function one arg
    create: function (value) {
        var instance = Object.create(this);
        //ones one arg
        instance.name = name;
        return instance;
    },
    //
    //multi-arg create function
    create2: function (values) {
        var instance = Object.create(this);
        Object.keys(values).forEach (function(key) {
            instance[key] = values[key];
        });
        return instance;
    },
    //
    species: "human",
    sayName: function() {
        console.log(this.name);
    },
    saySpecies: function() {
        console.log(this.species);
    }
}

var musician = Object.create(human);
musician.name = "Will";
musician.instrument = "Drums";


//pushing API data into an object
var brokerages = {};
var total = 0;

while(data.length) {
    total += data.amount;
    if (brokerages.hasOwnProperty("data.brokerage")) {
        brokerages[data.brokerage].brokerTotal += data.amount;
        brokerages[data.brokerage].accounts.push({data.accId : data.amount});
    }
    else {
        brokerages[data.brokerage].brokerTotal = data.amount;
        brokerages[data.brokerage].accounts.push({data.accId : data.amount});
    }
}

//getting account data
brokerages[brokerName].accounts.find(function (items) {
    return items.accId == ***123;
}).amount;


//fucking watch this trickery
function bind(func, context) {
    //console.log(arguments[2]);
    return func.bind(context, arguments[2]); //binds 'me' to sayname and gives it an arg
}

// test case - do not modify
(function () {
    var sayname = function (one, two) {
        var string = "I am " + this.name + " " + one + " " + two;
        console.log(string);
        return string;
    };

    var me = { name:"Robert" };

    var boundfunc = bind(sayname, me, "J.");
    if (boundfunc("Dobbs") === "I am Robert J. Dobbs") { //gives sayname 1 arg
        console.log("SUCCESS!"); // NEED TO PRINT THIS!
    }
})();
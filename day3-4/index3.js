let persons = [{
    name: "Vishnu",
    age: 15,
    country: "India",
    hobbies:["Dancing","Singing","Watching movies"]
},
{
    name: "Jordan",
    age: 35,
    country: "America",
    hobbies:["Rapper","painting"]
},
{
    name: "Putin",
    age: 60,
    country: "Russia",
    hobbies:["Golf","Traveller","Football"]
},{
    name: "john",
    age: 29,
    country: "canada",
    hobbies:["Playing videoGames","Listening music","Watching movies"]
},{
    name: "Arjun",
    age: 55,
    country: "India",
    hobbies:["Reading books"]
}
];

// Display all the objects on the console

function showList(){
    for (let index = 0; index < persons.length; index++) {
        console.log(persons[index]);

    }
};

// Display all the objects having age less than 30
function age(){
    for(let i=0; i < persons.length;i++){
        if (persons[i].age < 30) {
            const a = persons[i];
            console.log("The persons Age less than 30 is" + " " + a.name + "," +"Age:"+ a.age + "," + "Country:" + a.country+ "," + "Hobbies:" + a.hobbies);
            
        }
    }
};

age();

// Display all the objects having country india

function country(){
    for(let i=0; i < persons.length;i++){
        if (persons[i].country == "India") {
            const b = persons[i];
            console.log(`Person from country India is ${b.name} , Age:${b.age} , Hobbies:${b.hobbies}`);
            
        }
    }
};

country();
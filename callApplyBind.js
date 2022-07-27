

let aditya={
     fname:"aditya",
     lname:"kanojia",
     age:25,
     getDetails(){
        return `My Name is ${this.fname} ${this.lname} and I am ${this.age} years`
     }
}

 let aniee={
    // fname: "Barsa",
    // lname:"Roy",
    // age:24  
    ...aditya
 }

//   aniee.fname='kanojia';

aniee.fname="anikita";

// let details= aditya.getDetails.call(aniee);

// console.log(details);
// console.log(aditya.getDetails());

// console.log(aditya);
// console.log(aniee)
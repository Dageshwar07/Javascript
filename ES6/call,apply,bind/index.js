// let userDetails={
//     name:"dageshwar",
//     age:24,
//     designation:"software engineer",

//     printDetails:function(){
//         console.log(this)
//         // -----this is use to point current object,apne object ko point krne ke liye,apne ander jitni bhi properties hai usko point krne ke liye
        
//     }
// }
// userDetails.printDetails()

// let userDetails2={
//     name:"pratik",
//     age:23,
//     designation:"software engineer",
// }
// userDetails.printDetails.call(userDetails2)


// let userDetails={
//     name:"dageshwar",
//     age:24,
//     designation:"software engineer",

   
// }
// // -----ye function har obj ke liye chalega agr generic raha to with the help of call function
// // ---------dependany ni rhna chahiye object ke upr-----------
// printDetails=function(){
//     console.log(this)
//     // -----this is use to point current object,apne object ko point krne ke liye,apne ander jitni bhi properties hai usko point krne ke liye
    
// }
// printDetails.call(userDetails);

// let userDetails2={
//     name:"pratik",
//     age:23,
//     designation:"software engineer",
// }

// printDetails.call(userDetails2);


// -----------------------call with para-------------
// let userDetails={
//     name:"dageshwar",
//     age:24,
//     designation:"software engineer",

   
// }
// printDetails=function(city){
//     console.log(this.name+"  "+city)
// }
// printDetails.call(userDetails,"raipur");

// let userDetails2={
//     name:"pratik",
//     age:23,
//     designation:"software engineer",
// }

// printDetails.call(userDetails2,"bhilai");



// -----------------------apply-------------iseme multiple arguments pass kar skte hai as a arraylist 
let userDetails={
    name:"dageshwar",
    age:24,
    designation:"software engineer",

   
}
printDetails=function(state,city){
    console.log(this.name+"  "+state+" "+city)
}
printDetails.call(userDetails,"cg","raipur");

let userDetails2={
    name:"pratik",
    age:23,
    designation:"software engineer",
}

printDetails.call(userDetails2,"cg","raipur");

printDetails.apply(userDetails2,["cg","kumhari"]);

let newFunc=printDetails.bind(userDetails,"raipur","cg")
newFunc();
// bind function call ki hi tarah hai,bind kahta hai ki function ko direct call mat kro jab jarurat ho to kr lo

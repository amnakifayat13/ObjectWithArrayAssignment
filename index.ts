

// //Create an array. Store an object in each element of the array, and then store student details in every object. 
// In short, create an array of objects.By using loop print complete details


let surveyArray:{
    name: string;
    fatherName: string;
    education: string;
    age?:number;
    city: string;
    job?: boolean;
}[]
 = [{
    name: "Amna",
    fatherName: "Muhammad Noor-us-Safa",
    education: "MBA(Finance)",
    city: "Karachi",
    job: false,
},
{
    name: "Kifayat",
    fatherName: "Noor Muhammad",
    education: "M.B.B.S",
    age: 40,
    city: "Karachi",
    job: true,


},
{
    name: "Asia",
    fatherName: "Soorat Alam",
    education: "B.A",
    age: 29,
    city: "Karachi",
},
{
    name: "Farah",
    fatherName: "Naeem Akhter",
    education: "B.Com",
    city: "Karachi",
    
}, 
{
    name: "Dildara",
    fatherName: "Noor Muhammad",
    education: "FSc",
    age: 30,
    city: "Karachi",
    job: false,
}]
for(let i = 0; i < surveyArray.length; i++){
    console.log(surveyArray[i]);
}

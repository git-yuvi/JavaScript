//Array Functions
console.log("ForEach()");
const student =[
    { sname:'david',age:23},
    { sname:'arjun',age:13},
    { sname:'vijay',age:28}
    // "ajay","vijay","raj"
]
console.log(student);
student.forEach(value=>{
    console.log(value);
});
// 
console.log("Map()");

let details=student.map((value)=>({
    ...value,
    // sname:value.sname,
    // age:value.age,
    new_status:value.age>=18?"Eligible":"Not Eligible"

  
}));
console.table(details);

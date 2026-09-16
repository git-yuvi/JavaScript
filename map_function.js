//JavaScript MapFunction
console.log("Map()");
const student =[
    { sname:'david',age:23},
    { sname:'arjun',age:13},
    { sname:'vijay',age:28}
    // "ajay","vijay","raj"
]
let details=student.map((value)=>({
    ...value,
    // sname:value.sname,
    // age:value.age,
    new_status:value.age>=18?"Eligible":"Not Eligible"

  
}));
console.table(details);

// old way
let a="hello";
let b;
if(a==undefined)
{
b="Nothing";
}
else
{
b=a;
}
console.log(b); //hello

//new way
b=a||"Nothing";
console.log(b); //hello

// old way
let data={"name":"Allen"};
if(data!=undefined)console.log(data.name);

// new way
data!=undefined&&console.log(data.name);

let a = 5;
let b = 6;
let c = 0
const add = (par1,par2) => par1+par2;

const mul = (par1,par2) => par1*par2;

if (mul(a,b)){
        console.log("mul if", mul(a,b))
}

//can be written as

mul(a,b) && console.log("mul hack",mul(a,b));


if (mul(b,c)){
        console.log("mul if", mul(b,c));
}else{

        console.log("else add", add(b,c));
}

//can be written as

(mul(b,c) && console.log("mul hack",mul(b,c))) || console.log("add hack",add(b,c));

const myArr1 =process.argv
console.log(Number(myArr1[2]))
let result= Number( myArr1[2] )+ Number(myArr1[3])
console.log(`sum is =${result}`)
if(result >10 && result<100)
{
    console.log(`greater than 10 and smaller than 100, value is ${result}`)
}
else{
    if(result >100 && result<1000){
        
         console.log(`greater than 100 and smaller than 1000,value is ${result}`)
    }
   
}

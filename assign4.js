const myArr1=process.argv
console.log(`Amount is =  ${Number(myArr1[2])}`)
console.log(`Tip percentage is =  ${Number(myArr1[3 ])}`)
let tip= (myArr1[2])*Number(myArr1[3])/ Number(100)
console.log(`Tip is = ${tip}`)
let total=Number(myArr1[2] )+ Number(tip)
console.log(`Total is = ${total}`)

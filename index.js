 const num=[10, 20, 30, 40, 50];

//  let sum=0;
//  for(let i=0;i<num.length;i++){
//  sum=sum+num[i];
   
//  }
//  console.log(sum);
 
let temp=num[1];

num[1]=num[3];
num[3]=temp;

console.log(num);
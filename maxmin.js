const num=[45, 3, 33, 200, 30, 55];

let maxNum=num[0];
let minNum=num[0];

for(let i=0;i<num.length;i++){
    let correntNum=num[i];

    if(maxNum<correntNum){
        maxNum=correntNum;
    }

    if(minNum>correntNum){
        minNum=correntNum;
    }
}
console.log(maxNum);
console.log(minNum);
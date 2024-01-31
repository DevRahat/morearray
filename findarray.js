// find an array element 

const fruits=['mango', 'apple', 'grape', 'orange'];

const target='grape';

let foundIndex=-1;

for(let i=0;i<fruits.length;i++){
    let currentFruit=fruits[i];
    if(currentFruit==target){
        foundIndex=i;
    }
}
if(foundIndex>-1){
    console.log(foundIndex);
}else{
    console.log("Not found");
}

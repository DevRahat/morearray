const purchaseHistory=[100, 300, 500, 150, 125];

const filteredPurchaseHistory=[]; //we will push() filter element from purchaseHistory array

for(let i=0;i<purchaseHistory.length;i++){
    const currentElement=purchaseHistory[i];

    if(currentElement<=200){
        filteredPurchaseHistory.push(currentElement);
    }
}

console.log(filteredPurchaseHistory);

// different code using filter() 

const filteredPurchaseHistory2=purchaseHistory.filter(function(currentElement){
    return currentElement<=200
})
console.log(filteredPurchaseHistory);

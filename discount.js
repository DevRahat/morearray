const purchaseHistory=[100, 300, 500, 150, 125];

const discountPrice=[];
for(let i=0;i<purchaseHistory.length;i++){
    const currentElement=purchaseHistory[i];

    if(currentElement>=200){
        const calculatedDiscount=currentElement-currentElement*10/100;
        discountPrice.push(calculatedDiscount);
    }
    else{
        discountPrice.push(currentElement);
    }
}console.log(discountPrice);
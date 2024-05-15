function calculateCartPrice(val){
    return val;
}

console.log(calculateCartPrice(200));

function calculateCartPriceNew(...val){            // it return array of all the values.
    return val;                                    // ... is called rest or spread operator at different places as per their use.
}

console.log(calculateCartPriceNew(200,300,100));


function handleObj(obj){
    console.log(`Product ${pro_name} has price ${pro_price}`);
}

const product1 = {
    pro_name : "Axe_bodywash",
    pro_price : 199
}

console.log(product1);
console.log( {pro_name : "Maggie_familyPack", pro_price : 70});


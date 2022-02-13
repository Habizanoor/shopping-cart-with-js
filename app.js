function updateProductNumber(product, price, isAdd){
    const prodectInput = document.getElementById(product + '-number');
    let productNumber = prodectInput.value;
    if(isAdd == true){
        productNumber = parseInt(productNumber) + 1;
    }
   else if(productNumber >0){
    productNumber = parseInt(productNumber) - 1;
   }
   prodectInput.value = productNumber;
    //    update product total 
    const total = document.getElementById(product + '-total');
    total.innerText = productNumber * price;
    // calculate sub total 
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

    
}

document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true);

});

document.getElementById('case-minus').addEventListener('click',function(){
    
    updateProductNumber('case',59,false);

});

document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
});
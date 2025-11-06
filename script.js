const date = new Date().getFullYear();
console.log(date);
document.getElementById('year').innerText = date;

alert("For the best experience, switch to desktop view");

let weight = document.getElementById('weight');
const btn = document.getElementById('btn');
const wUnit = document.getElementById('weight-unit');
let height = document.getElementById('height');
const hUnit = document.getElementById('height-unit');
const end = document.getElementById('end');
const display = document.querySelector('.display');
const inputF = document.querySelector('.input-field');
const remarks = document.getElementById('remarks')

btn.addEventListener('click',()=>{
    let kgWeight = 0;
    if(wUnit.value === 'lb'){
       kgWeight = weight.value/2.2046;
    }
    else if(wUnit.value === 'kg'){
        kgWeight = weight.value;
    }
    else{
        console.error(error);
    }
    let cmHeight = 0;
    if(hUnit.value === 'in'){
       cmHeight = height.value * 2.54;
    }
    else if(hUnit.value === 'cm'){
        cmHeight = height.value;
    }
    else{
        console.error(error);
    }
    let bmi = 0;
    bmi = kgWeight/(cmHeight/100*cmHeight/100);

    let bmir = Math.round(bmi *100)/100;
    let kgWeightr = Math.round(kgWeight *100)/100;
    let cmHeightr = Math.round(cmHeight *100)/100;

    

    
    display.classList.remove('hide');
    display.classList.add('view');
    inputF.classList.add('hide');
    inputF.classList.remove('view');

    if (bmir < 18.5){
        remarks.innerText = "(Under)";
        display.classList.add('under');
        display.classList.remove('normal');
        display.classList.remove('over');
        display.classList.remove('obese');
        display.classList.remove('null');
    }else if(18.5<bmir && bmir<24.9){
        remarks.innerText = "(Normal)";
        display.classList.add('normal');
        display.classList.remove('under');
        display.classList.remove('over');
        display.classList.remove('obese');
        display.classList.remove('null');
    }else if(25<bmir && bmir<29.9){
        remarks.innerText = "(Over)";
        display.classList.add('over');
        display.classList.remove('normal');
        display.classList.remove('under');
        display.classList.remove('obese');
        display.classList.remove('null');
    }else if(bmir>29.9){
        remarks.innerText = "(Obese)";
        display.classList.add('obese');
        display.classList.remove('normal');
        display.classList.remove('over');
        display.classList.remove('under');
        display.classList.remove('null');
    }else{
        alert("error");
        display.classList.add('null');
        display.classList.remove('normal');
        display.classList.remove('over');
        display.classList.remove('obese');
        display.classList.remove('under');
    };

    document.getElementById('dis-bmi').textContent = bmir;
    document.getElementById('dis-height').textContent = cmHeightr;
    document.getElementById('dis-weight').textContent = kgWeightr;


    console.log(kgWeight,cmHeight,bmi);
});
end.addEventListener('click',()=>{
    display.classList.add('hide');
    display.classList.remove('view');
    inputF.classList.add('view');
    inputF.classList.remove('hide');
});



///📌📌

//1 inch = 2.54 centimetres.
//2.2046 pounds in a kilo
//let inches = 72;
//let pounds = 180;
//📌let weight = pounds / 2.2046; // in kilos
//📌let height = inches * 2.54; // height in centimetres
//console.log(weight, height);
//let bmi = weight/(height/100*height/100);
//console.log(bmi)

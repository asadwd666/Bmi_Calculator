
function myFun(){
   let height=document.getElementById('height').value;
   
   let centiMeter=2.54 ;
   let result=document.querySelector('.heightresult').innerHTML=height*centiMeter  ;
   
   ///////////////////////////////////////////////////////////// weight conversion
   let weight=document.getElementById('weight').value;
   let pound=2.2046;
   let weightresult=document.getElementById('weightresult').innerText=weight/pound ;
let heightResult=result;
let weightResult=weightresult*weightresult;
if(heightResult && weightResult){
console.log('BMI :',heightResult/weightResult)
}

}


// let result=document.querySelector('.heightresult').value;

// let weightresult=document.getElementById('weightresult').value;
// let BMI=weightresult/Math.pow(result);
// console.log(BMI)


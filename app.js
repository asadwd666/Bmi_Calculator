
function myFun(){
   let height=document.getElementById('height').value;
   
   let centiMeter=2.54 ;
   let result=document.querySelector('.heightresult').innerHTML=height*centiMeter  ;
   let heightinMeter=result/100;

   ///////////////////////////////////////////////////////////// weight conversion
   let weight=document.getElementById('weight').value;
   let pound=2.2046;
   let weightresult=document.getElementById('weightresult').innerText=weight/pound ;
// let heightResult=result;
let heightsquare=heightinMeter*heightinMeter;
if(heightsquare && weightresult){
console.log('BMI :',weightresult/heightsquare)
}

}





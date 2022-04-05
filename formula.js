function inchToMeter(){
    var feet = document.getElementById('feet').value;
    var inch = document.getElementById('inches').value;
    
    addInch= feet*12;
    totalInches= Number(inch)+Number(addInch)
    totalMeters=totalInches*0.0254;
    return totalMeters;
} 

var totalMeters;
function bmi(){
    var weight = document.getElementById('weight').value;
    inchToMeter();
    var result = weight/(totalMeters*totalMeters)
    result= (result.toFixed(2));
    if(result <= 18.5){
        document.getElementById("result").innerHTML= "You are underweight! Gain some weight<br> BMI: "+result;
    }
    else if(result>18.5 && result<=24.9){
        document.getElementById("result").innerHTML= "You are Healthy.<br> BMI: "+result;
    }
    else if(result>24.9 && result<=29.9){
        document.getElementById("result").innerHTML= "You are Overweight. Lose some weight <br> BMI: "+result;
    }
    else if(result>30){
        document.getElementById("result").innerHTML= "You are Obese! Lose weight <br> BMI: "+result;
    }
    else{
        document.getElementById("result").innerHTML= "Please fill the form above";
    }
   
}


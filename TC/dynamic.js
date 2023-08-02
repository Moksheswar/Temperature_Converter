function fun1(){
    if(document.getElementById("sel1").value==document.getElementById("sel2").value){
        const v1=document.getElementById("a").value;
        document.getElementById("in").value=v1;
    }
    else if(document.getElementById("sel1").value=="Celsius" && document.getElementById("sel2").value=="Fahrenheit"){
        const v1=document.getElementById("a").value;
        const v2=(v1 * 1.8) + 32;
        document.getElementById("in").value=v2;
    }
    else if(document.getElementById("sel1").value=="Celsius" && document.getElementById("sel2").value=="Kelvin"){
        const v1=document.getElementById("a").value;
        const v2=273.15 + parseInt(v1);
        document.getElementById("in").value=v2;
    }
    else if(document.getElementById("sel1").value=="Fahrenheit" && document.getElementById("sel2").value=="Celsius"){
        const v1=document.getElementById("a").value;
        const v2=(v1 - 32) / 1.8;
        document.getElementById("in").value=v2;
    }
    else if(document.getElementById("sel1").value=="Fahrenheit" && document.getElementById("sel2").value=="Kelvin"){
        const v1=document.getElementById("a").value;
        const v2=273.15 + ((v1 - 32)/1.8);
        document.getElementById("in").value=v2;
    }
    else if(document.getElementById("sel1").value=="Kelvin" && document.getElementById("sel2").value=="Celsius"){
        const v1=document.getElementById("a").value;
        const v2=v1-273.15;
        document.getElementById("in").value=v2;
    }
    else if(document.getElementById("sel1").value=="Kelvin" && document.getElementById("sel2").value=="Fahrenheit"){
        const v1=document.getElementById("a").value;
        const v2=((v1 - 273.15) * 1.8) + 32;
        document.getElementById("in").value=v2;
    }
}
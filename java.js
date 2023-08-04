function txt(){
    document.getElementById('lab1').style.fontSize="12px"
    document.getElementById('lab1').style.top="-10px"
    document.getElementById('lab1').style.color="rgb(161, 161, 161)"
    if(document.form1.frtxt.value===""){
        document.getElementById('lab1').style.fontSize="16px"
        document.getElementById('lab1').style.top="10px"
        document.getElementById('lab1').style.color="white"
    }
}
function txt2(){
    document.getElementById('lab2').style.fontSize="12px"
    document.getElementById('lab2').style.top="-10px"
    document.getElementById('lab2').style.color="rgb(161, 161, 161)"
    if(document.form1.lttxt.value===""){
        document.getElementById('lab2').style.fontSize="16px"
        document.getElementById('lab2').style.top="10px"
        document.getElementById('lab2').style.color="white"
    }
}
function txt3(){
    document.getElementById('lab3').style.fontSize="12px"
    document.getElementById('lab3').style.top="-10px"
    document.getElementById('lab3').style.color="rgb(161, 161, 161)"
    if(document.form1.email.value===""){
        document.getElementById('lab3').style.fontSize="16px"
        document.getElementById('lab3').style.top="10px"
        document.getElementById('lab3').style.color="white"
    }
}
function txt4(){
    document.getElementById('lab4').style.fontSize="12px"
    document.getElementById('lab4').style.top="-10px"
    document.getElementById('lab4').style.color="rgb(161, 161, 161)"
    document.getElementById('ic').style.display="inline-block"
    if(document.form1.pasword.value===""){
        document.getElementById('lab4').style.fontSize="16px"
        document.getElementById('lab4').style.top="10px"
        document.getElementById('lab4').style.color="white"
        document.getElementById('ic').style.display="none"
    }
}
function show(){
    var a = false;
    if(a){
        document.getElementById('pass').setAttribute("type","password")
        a=false
    }
    else{
        document.getElementById('pass').setAttribute("type","text")
        document.getElementById('ic').setAttribute("onclick","hide()")
        document.getElementById('ic').innerHTML=`<i class="fa-solid fa-eye-slash"></i>`
        a=true
    }
}
function hide(){
    var b = false;
    if(b){
        document.getElementById('pass').setAttribute("type","text")
        b = false
    }
    else{
        document.getElementById('pass').setAttribute("type","password")
        document.getElementById('ic').setAttribute("onclick","show()")
        document.getElementById('ic').innerHTML=`<i class="fa-solid fa-eye"></i>`
        b =true
    }
}
function showcard(){
    if(document.form1.frtxt.value!==""&&document.form1.frtxt.value!==""&&document.form1.email.value!==""&&document.form1.pasword.value!==""){
        document.getElementById('mcard').style.display="flex"
        let fristname = document.form1.frtxt.value;
        let lastname = document.form1.lttxt.value;
        let Email = document.form1.email.value;
        document.getElementById('cd3').innerHTML=`${fristname} ${lastname}`;
        document.getElementById('cd4').innerHTML= `${Email}`;
    }
    else{
        if(document.form1.frtxt.value===""){
            document.getElementById('ff1').style.boxShadow="0 0 20px red";
            document.getElementById('ff1').style.border="1.5 solid red";
        }
        if(document.form1.lttxt.value===""){
            document.getElementById('ff2').style.boxShadow="0 0 20px red";
            document.getElementById('ff2').style.border="1.5 solid red";
        }
        if(document.form1.email.value===""){
            document.getElementById('ff3').style.boxShadow="0 0 20px red";
            document.getElementById('ff3').style.border="1.5 solid red";
        }
        if(document.form1.pasword.value===""){
            document.getElementById('pas').style.boxShadow="0 0 20px red";
            document.getElementById('pas').style.border="1.5 solid red";
        }
    }
}
function hidecard(){
    document.getElementById('mcard').style.display="none"
}


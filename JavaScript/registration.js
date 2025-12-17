window.onload = inti;

function inti(){
    var Today = new Date();

    document.getElementById("date").value = Today.
    getDate() + "/" + (Today.getMonth()+1) + "/" + Today.getFullYear();
    
    document.forms[0].onsubmit = function(){
        if(confirm("Are you sure you want to submit the form")== 1){
            var name = document.getElementById("stdName").value;

            alert(name + ", student information and parent information submitted, check your email");

            return true;
           
        }else{
            return false;
        }
    }

document.getElementById("noIllness").onclick = turnOnNoIllness ;
document.getElementById("yesIllness").onclick = turnOnYesIllness ;

function turnOnNoIllness() {
    document.getElementById("typeIllness").disabled= true;
    document.getElementById("illnessF").disabled= true;
}

function turnOnYesIllness() {
    document.getElementById("typeIllness").disabled= false;
    document.getElementById("illnessF").disabled= false;
}
}




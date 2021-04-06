let screen = document.getElementById("hire");
function result(i){
    let x = i;
    if(x=== "="){
        screen.value=eval(screen.value)
    }else if(x === "c"){
        screen.value= "";
    }else if(x === "d"){
        screen.value= "";
    }else{
        screen.value+=i;
    }
};
var inp1 = document.getElementById('inp')

function getvalue(btnvalue){
    inp1.value += btnvalue;
}

function calculate(){
    var a =inp1.value;
    var b= eval(a)
    inp1.value = b;
}

function clearAll(){
    inp1.value = ""
}
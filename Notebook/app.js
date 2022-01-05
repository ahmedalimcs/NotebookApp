var div1 = document.getElementById("div1")
console.log(div1)
var input1 = document.getElementById("input1")
console.log(input1)
var input2 = document.getElementById("input2")
console.log(input2)

function add(){

   if(input1.value === "" && input2.value === ""){
        console.log("user inter data")
    }else if(input1.value === ""){
        console.log("submitt value")
    }else if(input2.value === ""){
       console.log("fill the value")
    } else{
        // alert("enter valid data")
    }
    
    var div2 = document.createElement("div")
    div2.setAttribute("class" ,"message")
    console.log(div2)

    var h2 = document.createElement("h2")
    var h2text = document.createTextNode(input1.value)
    h2.appendChild(h2text)
    console.log(h2)

    var pera = document.createElement("pera")
    var ptext = document.createTextNode(input2.value)
    pera.appendChild(ptext)
    console.log(pera)

    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("edit")
    editbtn.setAttribute("onclick","editbtn(this)")
    editbtn.appendChild(edittext)
    console.log(editbtn)

    var removebtn = document.createElement("button")
    var removetext = document.createTextNode("remove")
    removebtn.setAttribute("onclick","removebtn(this)")
    removebtn.appendChild(removetext)
    console.log(removebtn)
    div1.appendChild(div2)
    div2.appendChild(editbtn)
    div2.appendChild(removebtn)
    div2.appendChild(h2)
    div2.appendChild(pera)
    console.log(div1)
    input1.text = "";
    input2.text = "";
}

function del(){
    div1.innerHTML = "";
}

function edit(e){

    // var a = e.parentNode.firstChild.innerHTML;
    // var b = e.parentNode.firstChild.nextSibling.innerHTML;
    e.parentNode.innerHTML
    input1.value = a;
    input2.value = b;
    e.parentNode.remove()

}

function remove(e){
  var c = e.parentNode.parentNode.remove()
}

// function deleteall(){
//     func.innerHTML = "";
// }

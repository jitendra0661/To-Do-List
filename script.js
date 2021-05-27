let inputBox = document.querySelector(".input-box");
let ul = document.querySelector(".task-list");
inputBox.addEventListener("keydown", function(object){
    // console.log(object);
    console.log("event");

    if(object.key=="Enter" && object.value!=""){
        let value = inputBox.value; //value of what we type in input box
        let li = document.createElement("li");
        li.textContent = value;
        li.setAttribute("class" , "task");
        ul.appendChild(li);

        li.addEventListener("dblclick" , function(){       //function() or function delFN()
            li.remove();
        })
        inputBox.value="";    //clear the input box
    }
})
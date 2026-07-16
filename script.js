let lists = document.querySelectorAll(".books")
let addList = document.querySelector(".add")
let navbar = document.querySelector(".left-navbar")

let count=0;
addList.addEventListener("click",()=>{
    let newList = document.createElement("a");
    let newbox = document.createElement("a")
    newList.innerHTML = "<input type='text' class='item'>";
    newbox.innerHTML = "<input type='checkbox' class='box'>"
    document.querySelector(".boxes").append(newbox);
    addList.before(newList);
    newList.setAttribute("item")
    newbox.setAttribute("box")
    count++;
    if(count==7){
        alert("Cant add more Lists");
        addList.disable = true;
        addList.style.visibility = "hidden"
    }
})







function mynav(){
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.right == "0%"){
            nav.style.right="-50%";
            bar.src = "pic/menu.png"
        }else{
            nav.style.right="0%"
            bar.src = "pic/x.png"
        }
    }
}
mynav();

function myHeader(){
    let header = document.getElementById("header");
    let lamp = document.getElementById("lamp");
    window.addEventListener("scroll", function(){
        if(this.window.scrollY > 0){
            header.classList.add("active");
            lamp.src = "pic/blamp.png";
        }else{
            header.classList.remove("active");
            lamp.src = "pic/wlamp.png";
        }
    })
}
myHeader();
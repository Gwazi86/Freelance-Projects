let li_elements = document.querySelectorAll(".wrapper_top ul li");
let item_elements = document.querySelectorAll(".platterlist");

for(let i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function(){
        li_elements.forEach(function(li) {
            li.classList.remove("active");
        })
        this.classList.add("active");
        let li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item) {
            item.style.display = "none"
        })

        if(li_value == "classicplatters") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if(li_value = "executiveplatters") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else {
            console.log("");
        }
    })
}
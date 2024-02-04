// code for "see more" button
let loadbtn = document.querySelector('#more-btn');
let count = 3;
loadbtn.onclick = () => {
    let boxes = document.querySelectorAll('.container .box-container .box');
    for (var i = count; i < count + 3; i++) {
        boxes[i].style.display = "inline-block";
    }
    count += 3;
    if (count >= boxes.length) {
        loadbtn.style.display = "none";
    }
}



let open_nav = document.querySelector('.nav-list')
function toggle() {
    if (open_nav.style.visibility == "hidden") {
        open_nav.style.visibility = "visible"
    }
    else {
        open_nav.style.visibility = "hidden"
    }
}
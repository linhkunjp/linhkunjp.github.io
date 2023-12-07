
var subscribe = document.querySelectorAll('#subscribe')
var modal = document.getElementById('modal')
var closeModal = document.querySelectorAll('#close')

var liked = document.querySelectorAll('#like')

var reply = document.querySelectorAll('#reply')
var showReply = document.querySelectorAll('.showReply')

var menuIcon = document.querySelector('.menu-icon')
var icon = document.querySelector('.icon')


// Ẩn hiện icon mobile
menuIcon.onclick = function(){
    if (icon.style.display === "flex")
        {icon.style.display = "none"}
    else
        {icon.style.display = "flex"}
}

// Ẩn hiện form đăng ký
subscribe.forEach(item =>{
    item.onclick = function(){
    modal.style.display = 'block'
}
})

closeModal.forEach(item =>{
    item.onclick = function(){
    modal.style.display = 'none'
}
})

// Like and Liked
liked.forEach(item =>{ 
    item.onclick = function(){
        if(this.innerHTML === "❤ Like"){
            this.style.fontWeight = "bold";
            this.innerHTML = "✓  Liked";
        }else {
            this.style.fontWeight = "bold";
            this.innerHTML = "❤ Like"
        }
    }
})

//Ẩn hiện replies
reply.forEach((item, index) =>{
    item.onclick = function(){
        if (showReply[index].style.display === "block")
            {showReply[index].style.display = "none"}
        else
            {showReply[index].style.display = "block"}
    }
})



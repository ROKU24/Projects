var main=document.querySelector('.main')
var cursor=document.querySelector('.cursor')

main.addEventListener('mousemove',(position)=>{
    cursor.style.left=position.x+'px'
    cursor.style.top=position.y+'px'
})

var arr = [
    {
        dp: 'https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1708034677699-6f39d9c59f6e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp: 'https://plus.unsplash.com/premium_photo-1719844425821-8d868c81f9d4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1722191713694-cbc7f0089bf7?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp: 'https://images.unsplash.com/photo-1630710478039-9c680b99f800?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1594007759138-855170ec8dc0?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp: 'https://images.unsplash.com/photo-1662997285144-fcded41cc6e9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1598601065215-751bf8798a2c?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]


var storiyan=document.querySelector('#storiyan')
var clutter = ''
arr.forEach((elem, idx) => {
    clutter += `<div class="story">
                <img id='${idx}' src="${elem.dp}" alt="">
            </div>`

})

storiyan.innerHTML = clutter

storiyan.addEventListener('click',(dets)=>{
    document.querySelector('#fullscreen').style.display='block'
    document.querySelector('#fullscreen').style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector('#fullscreen').style.display='none'
    }, 2000);

    // 
    
})

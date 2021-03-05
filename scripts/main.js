//DOMCONTENTLOADED

window.addEventListener('DOMContentLoaded',function(){
    document.body.insertAdjacentHTML('beforeend', FOOTER)
    document.body.insertAdjacentHTML('afterbegin',NAV)

    let header = document.querySelector('header')
    header.style.opacity=0;
    
    setTimeout(function(){
        header.style.display= 'none'
    },1500)
})


//TABS AND MENUS
function showMenu(){
    let menu = document.getElementById('menu')
    menu.style.left='0';
    document.body.style.overflowY='hidden'
}
function hideMenu()
{
    let menu = document.getElementById('menu')
    menu.style.left='-100%';
    document.body.style.overflowY='auto'
}

var menu = document.getElementById('menu')
menu.addEventListener('click',event =>{
    if(event.target!=event.currentTarget)
        return 
    menu.style.left='-100%';
    document.body.style.overflowY='auto'
})

var loading = document.getElementById('loading')
var menuButtons = document.querySelectorAll('[option]')
var tabs = document.querySelectorAll('[tab]')

menuButtons.forEach(menuButton=>{
    menuButton.addEventListener('click',async function(){
        loading.style.display='flex'
        let tabName = menuButton.attributes.option.value

        menuButtons.forEach(menuButton2 =>{
            menuButton2.classList.remove('active')
        })
        menuButton.classList.add('active')

        tabs.forEach(tab =>{
            tab.classList.remove('active')
        })
        let targetTab = document.querySelector('[tab='+tabName+']')
        targetTab.classList.add('active')

        let tabTitle = document.getElementById('tab-title')
        tabTitle.innerText = menuButton.innerText
        loading.style.display='none'
        hideMenu()
    })
})

// //CHANGE VIEW
// function changeView(renderedView,short){
//     document.body.innerHTML = renderedView
//     document.getElementById('viewcss').href=`styles/${short}.css`
    
//     document.body.insertAdjacentHTML('beforeend',FOOTER)
//     document.body.insertAdjacentHTML('afterbegin',NAV)
    
//     let head= document.getElementsByTagName('head')[0];
//     let script= document.createElement('script');
//     script.src= `scripts/${short}Script.js`;

//     head.appendChild(script);

//     window.scrollTo(0,0)
// }
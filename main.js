const btnImport=document.querySelector(".settings__btn-import")
const btnExport=document.querySelector(".settings__btn-export")
const modalImport=document.querySelector(".modal__import")
const modalExport=document.querySelector(".modal__export")
const menuLinks=document.querySelectorAll('.menu__link')
const settingItems=document.querySelectorAll('.settings__item')
btnImport.addEventListener("click", function(){
    modalImport.parentNode.classList.add('active')
    modalImport.classList.add('active')
   
})
btnExport.addEventListener("click", function(){
    modalExport.parentNode.classList.add('active')
    modalExport.classList.add('active')
   
})
modalImport.querySelector(".close").addEventListener('click',function(){
    modalImport.parentNode.classList.remove('active')
    modalImport.classList.remove('active')
})
modalExport.querySelector(".close").addEventListener('click',function(){
    modalExport.parentNode.classList.remove('active')
    modalExport.classList.remove('active')
})
menuLinks.forEach(element=>(
    element.addEventListener('click',function(event){
        for(let j=0; j<menuLinks.length;j++){
            menuLinks[j].classList.remove('active')
        }
        element.classList.add('active')
    })
))
settingItems.forEach(element=>(
    element.addEventListener('click',function(event){
        event.preventDefault
        for(let j=0; j<settingItems.length;j++){
            settingItems[j].classList.remove('active')
        }
        element.classList.add('active')
    })
))
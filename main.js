const btnImport=document.querySelector(".settings__btn-import")
const btnExport=document.querySelector(".settings__btn-export")
const modalImport=document.querySelector(".modal__import")
const modalExport=document.querySelector(".modal__export")

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
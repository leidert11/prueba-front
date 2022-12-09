tabla=document.querySelector('.table');
modal=document.querySelector('.container-modal')
agregar=document.querySelector('#añadir')
cancelar=document.querySelector('#cancelar')
guardar=document.querySelector('#guardar')
eliminar=document.querySelector('#descartar')

agregar.addEventListener('click', ()=>{
    modal.style.top=0
})

cancelar.addEventListener('click', ()=>{
    modal.style.top='-100vh'
})
id=0

guardar.addEventListener('click', ()=>{
    
    id++
    uid=document.querySelector('#uid').value;
    referencia=document.querySelector('#referencia').value;
    nombre=document.querySelector('#nombre').value;
    categoria=document.querySelector('#categoria').value;
    subcategoria=document.querySelector('#subcategoria').value;
    
    
    if(uid!='' && referencia!='' && nombre!='' && categoria!='' && subcategoria!=''){
    tabla.innerHTML+=`
    
        <tr class="fila-${id}">
            <td><input type="checkbox" class="check" ></td>
            <td>${id}</td>
            <td></td>
            <td>${uid}</td>
            <td>${referencia}</td>
            <td>${nombre}</td>
            <td>${categoria}</td>
            <td>${subcategoria}</td>
        </tr>`
        modal.style.top='-100vh'
    }
    else{
        alert('campos vacios')
    }
});

eliminar.addEventListener('click',()=>{
    
    let fila=document.querySelector(`.fila-${id}`)
    fila.remove()
    id--
})
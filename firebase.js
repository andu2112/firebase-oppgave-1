const list=document.querySelector(`ul`);
const form=document.querySelector(`form`);
const addpersoner= (personer,id) =>{
    console.log(personer);
    let time=personer.dato;
    let html =`
        <li data-id="${id}">
            <div>${personer.fornavn}</div>
            <div>${personer.etternavn}</div>
            <div>${personer.dato}</div>

        </li>
    `;
    list.innerHTML +=html;
}
const deletpersoner= (id) =>{
 const peronser =document.querySelectorAll(`li`);
 peronser.forEach(person =>{
     if(person.getAttribute(`data-id`)=== id)
     person.remove();
 })
}

mine.collection(`personer`).onSnapshot(snapshot=> {
    snapshot.docChanges().forEach(change =>{
        const doc= change.doc
        console.log(doc);
        if(change.type === `added`){
            addpersoner(doc.data(), doc.id);
        }else if (change.type === `removed`){
            deletpersoner(doc.id)
        }
    })
});



form.addEventListener(`submit`, e =>{
    e.preventDefault();
    //const values= form.personer.value.split(" ")
    const person ={
        fornavn:form.fornavn.value,
        etternavn:form.etternavn.value,
        dato:form.dato.value, 
    };

 mine.collection(`personer`).add(person).then(()=> {
    console.log(`en person har blitt added`);
}).catch(err =>{
    console.log(err);
    });

});

form.addEventListener(`click`, () =>{

})
    



        









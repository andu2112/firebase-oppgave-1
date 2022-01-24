const list=document.querySelector(`ul`);
const form=document.querySelector(`form`);
const addekteskap= (ekteskap) =>{
    console.log(ekteskap);
    let time=ekteskap.dato;
    let html =`
        <li>
            <div>${ekteskap.ektefelle}</div>
            <div>${ekteskap.etternavn}</div>
            <div>${ekteskap.kommune}</div>

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

   mine.collection(`ekteskap`).onSnapshot(snapshot=> {
    snapshot.docChanges().forEach(change =>{
        const doc= change.doc
        console.log(doc);
        if(change.type === `added`){
            addekteskap(doc.data(), doc.id);
        }else if (change.type === `removed`){
            addekteskap(doc.id)
        }
    })
});


form.addEventListener(`submit`, e =>{
    e.preventDefault();
    //const values= form.personer.value.split(" ")
const person ={
    ektefelle:form.ektefelle.value,
    etternavn:form.etternavn.value,
    kommune:form.kommune.value,   
};

 mine.collection(`ekteskap`).add(person).then(()=> {
    console.log(`en ekteskap har blitt added`);
}).catch(err =>{
    console.log(err);
    });

});

const lister =

list.addEventListener(`click`, ()=>{
    console.log(andreas )
    console.log(typof)
})
console.log(0)







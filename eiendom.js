const list=document.querySelector(`ul`);
const form=document.querySelector(`form`);
const addeiendom= (eiendom) =>{
    console.log(eiendom);
    let time=eiendom.dato;
    let html =`
        <li>
            <div>${eiendom.adresse}</div>
            <div>${eiendom.postnummer}</div>
            <div>${eiendom.poststed}</div>
            <div>${eiendom.eiendomsnummer}</div>
            <div>${eiendom.kommune}</div>

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


   mine.collection(`eiendom`).onSnapshot(snapshot=> {
    snapshot.docChanges().forEach(change =>{
        const doc= change.doc
        console.log(doc);
        if(change.type === `added`){
            addeiendom(doc.data(), doc.id);
        }else if (change.type === `removed`){
            addeiendom(doc.id)
        }
    })
});



form.addEventListener(`submit`, e =>{
    e.preventDefault();
    //const values= form.personer.value.split(" ")
const eiendom={
    eiendomsnummer:form.eiendomsnummer.value,
    postnummer:form.postnummer.value,
    adresse:form.adresse.value, 
    kommune:form.kommune.value, 
    poststed:form.poststed.value, 
};

 mine.collection(`eiendom`).add(eiendom).then(()=> {
    console.log(`en bil har blitt added`);
}).catch(err =>{
    console.log(err);
    });

});

const lister =

list.addEventListener(`click`, ()=>{
    console.log(andreas )
    console.log(typof)
})
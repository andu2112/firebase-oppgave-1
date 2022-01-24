const list=document.querySelector(`ul`);
const form=document.querySelector(`form`);
const addbiler= (biler) =>{
    console.log(biler);
    let time=biler.dato;
    let html =`
        <li>
            <div>${biler.merke}</div>
            <div>${biler.navn}</div>
            <div>${biler.nummer}</div>

        </li>
    `;
    list.innerHTML +=html;
}



mine.collection(`biler`).onSnapshot(snapshot=> {
    snapshot.docChanges().forEach(change =>{
        const doc= change.doc
        console.log(doc);
        if(change.type === `added`){
            addbiler(doc.data(), doc.id);
        }else if (change.type === `removed`){
            addbiler(doc.id)
        }
    })
});


form.addEventListener(`submit`, e =>{
    e.preventDefault();
    //const values= form.personer.value.split(" ")
const bil={
    merke:form.merke.value,
    navn:form.navn.value,
    nummer:form.nummer.value,   
};

 mine.collection(`biler`).add(bil).then(()=> {
    console.log(`en biler har blitt added`);
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








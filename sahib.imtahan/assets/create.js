const btn = document.querySelector('.btn')
btn.addEventListener('click',function(){
    fetch('https://6475faa4e607ba4797dd0cdc.mockapi.io/Sahib',{
    method:'POST',
    headers: {
             'Content-Type':'application/json'
    },
    body: JSON.stringify({
        Avatar : document.querySelector('#picture').value,
        Name: document.querySelector('#name').value,
        course: document.querySelector('#course').value
    })
}).then(res=>{
    if(res.ok){
               succes("Tebrikler!Isteyiniz qeyde alindi.");
                document.querySelector('#picture').value = '';
                document.querySelector('#name').value = '';
                document.querySelector('#course').value = '';
    }
    else{
        error("sehvlik var")
    }
}).catch(()=>error("sehvlik var"))
})
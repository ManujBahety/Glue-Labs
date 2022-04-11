document.getElementById('filterInput').addEventListener('keyup', () => {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item');


    li.forEach(item => {
        let a = item.getElementsByTagName('a')[0];
        item.style.display = a.innerText.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    })

    let collectionheader=document.querySelectorAll('li.collection-header');

    collectionheader.forEach(item=>{
        let h = item.getElementsByTagName('h5')[0];
        if(h.innerText.toUpperCase().startsWith(filterValue)){
            item.style.display='block';
        }

        else{
            item.style.display='none';
        }
    })
})
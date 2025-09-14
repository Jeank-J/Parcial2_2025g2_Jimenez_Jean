function mostarSection (id){
    let x = document.querySelectorAll('main section');
    x.forEach(item =>{
        item.style.display = (item.id === id ? "block" : "none");
    });
}
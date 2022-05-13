/* author : Le Van Tinh 2014621  */
let loadMoreBtn = document.querySelector("#more");
let currentItem = 8;
loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.items-wrapper .item')];
    for ( var i = currentItem ; i < currentItem + 4 ; i++ ){
        boxes[i].style.display = 'flex';
    }
    currentItem+=4;

    if ( currentItem >= boxes.length ){
        loadMoreBtn.style.display = 'none';
    }
}
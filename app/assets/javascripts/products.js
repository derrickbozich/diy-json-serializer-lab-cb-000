$(function(){
  $('.js-next').on('click', function(e){
    e.preventDefault();
    console.log("hijacked the link!");
    const nextId = parseInt(this.dataset.id) + 1;
    const url = `products/${nextId}/data`
    debugger
    $.get(url, function(json){
      debugger
    })


  })


})

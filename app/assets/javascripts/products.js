$(function(){
  $('.js-next').on('click', function(e){
    console.log("hijacked the link!");
    const nextId = parseInt(this.dataset.id) + 1;
    const url = `products/${nextId}/data`
    debugger
    $.getJSON(`/${nextId}/data`, function(json){
      debugger
    })

    e.preventDefault();
  })


})

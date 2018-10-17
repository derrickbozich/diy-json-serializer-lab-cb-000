$(function(){
  $('#next-product-link').on('click', function(e){
    console.log("hijacked the link!");
    const id = this.dataset.id
    const url = `products/${id}/data`
    debugger
    $.getJSON(url, function(json){
      debugger
    })

    e.preventDefault();
  })


})

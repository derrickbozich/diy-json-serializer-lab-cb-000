$(function(){
  $('#next-product-link').on('click', function(e){
    console.log("hijacked the link!");
    const id = this.dataset.id
    const url = `/${id}/data`
    $.getJSON(url, function(json){
      debugger
    })

    e.preventDefault();
  })


})

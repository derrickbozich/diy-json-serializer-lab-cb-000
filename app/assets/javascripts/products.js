$(function(){
  $('.js-next').on('click', function(e){
    e.preventDefault();
    console.log("hijacked the link!");
    const nextId = parseInt(this.dataset.id) + 1;
    const url = `products/${nextId}/data`
    debugger
    $.getJSON(url, function(json){
      debugger
    })
  })


  // $(".js-more").on("click", function() {
  //   const id = $(this).data("id");
  //   $.get("/products/" + id + "/description", function(description) {
  //     $.get("/products/" + id + "/inventory", function(inventory) {
  //       var inventoryText = "<strong>Available</strong>";
  //       if(inventory === "false"){
  //         inventoryText = "<strong>Sold Out</strong>";
  //       }
  //       var descriptionText = "<p>" + description + "</p><p>" + inventoryText + "</p>";
  //       $("#product-" + id).html(descriptionText);
  //     });
  //   });
  // });


})

$(function(){
  $('.js-next').on('click', function(e){
    e.preventDefault();
    let nextId = parseInt(this.dataset.id) + 1;
    let url = `/products/${nextId}/data`
    debugger
    $.getJSON(url, function(json){
      $('.product-name').text(json.name)
      $('.product-description').text(json.description)
      $(".js-next").attr("data-id", json["id"])
      debugger
    })
  })


  $(".js-more").on("click", function() {
    const id = $(this).data("id");
    $.get("/products/" + id + "/description", function(description) {
      $.get("/products/" + id + "/inventory", function(inventory) {
        var inventoryText = "<strong>Available</strong>";
        if(inventory === "false"){
          inventoryText = "<strong>Sold Out</strong>";
        }
        var descriptionText = "<p>" + description + "</p><p>" + inventoryText + "</p>";
        $("#product-" + id).html(descriptionText);
      });
    });
  });


})

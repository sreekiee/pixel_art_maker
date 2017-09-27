// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

  
$("#submit").click(function(){
    const width = $("#input_width").val();
    const height = $("#input_height").val();

    console.log("width " + width + " height " + height);
    makeGrid(width, height);
    
});
  
// fn to draw the grid
function makeGrid(w, h) {

  // make the initial grid empty...no need for refresh
  $("#pixel_canvas").empty();
  
  // setting the width
  let len = '';
  for (let j = 0; j < w; j++){
    len += '<td></td>';
  }
  
  // drawing the final grid
  for (let i = 0; i < h; i++){
    $("#pixel_canvas").append('<tr>' + len + '</tr>');
  }

}

// change the color of the table cell when clicked
$("body").on("click", "td", function(){
    let color  = $("#colorPicker").val();
    $(this).css("background-color", color);
}); 
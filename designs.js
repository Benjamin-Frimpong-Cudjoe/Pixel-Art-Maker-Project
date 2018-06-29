// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    //Set the grid

    var Grid, row, cell, gridHeight, gridWidth, color;

    Grid = $('#pixelCanvas');
    gridHeight = $('#inputHeight').val();
    gridWidth = $('#inputWidth').val();

    Grid.children().remove();

    //Set grid row

    for (x = 0; x < gridHeight; x++) {
        Grid.append('<tr></tr>');
    }

    row = $('tr');

    //Set grid cell

    for (y = 0; y < gridWidth; y++) {
        row.append('<td></td>');
    }

    cell = Grid.find('td');

    //Change the grid color to the selected color from colorPicker on click mouseover

    Grid.on("mousemove", "td", function(e) {
        color = $("#colorPicker").val();
        if (e.buttons == 1) {
            $(this).css("background-color", color); //Draw the td that the user hovers
        }
    });

    //Change the grid color to the selected color from colorPicker

    cell.click(function() {
        color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
    });
}

//Prevent default submit behaviour
//Call makeGrid function

$('#submit').click(function(event) {
    event.preventDefault();
    makeGrid()
});
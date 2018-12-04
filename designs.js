// Assigning variables
var color; 
var height, width;

$('#sizePicker').submit(function (grid) { // To make the grid when user click on submit button
    grid.preventDefault(); // To prevent grid removal after clicking submit 
    height = $('#inputHeight').val(); // To let the user enter grid data (height and width)
    width = $('#inputWidth').val();
    makeGrid(height, width);
})

// this function will make the grid that its data was given by the user
function makeGrid(rows, columns) {
    $('tr').remove(); // to remove the previous grid if the user want to make a new one
    for (var r = 1; r <= rows; r++) {
        $('#pixelCanvas').append('<tr id=table' + r + '></tr>');
        for (var c = 1; c <= columns; c++) {
            $('#table' + r).append('<td></td>'); 
    //These two nested for loops are made to add rows and after each row it adds a cell
        }
    }
    
    $('td').click(function colorFill() { // The function will allow the user to edit cells color by clicking on them
        color = $('#colorPicker').val(); // To let the user chose the color he want
        if ($(this).attr('style')) {
            $(this).removeAttr('style'); // To remove the color from a cells when the user clicks on a filled one
        } else {
            $(this).attr('style', 'background-color: ' + color); // To fill an empty cell with the chosen color
        }
    })

}

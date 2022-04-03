var squares = $(".square").toArray();

var length = 0;
for (var count = 0; count < 64; count++) {
    if ((count > 7 && count < 16) || (count > 23 && count < 32) || 
    (count > 39 && count < 48) || (count > 55 && count < 64)) {
        if (count % 2 != 0) {
            $(squares[count]).css("background-color", "#bdbdbd");
        }
    } else {
        if (count % 2 == 0) {
            $(squares[count]).css("background-color", "#bdbdbd");
        }
    }
    
}

$(".square").click(function() {
    var id = $(this).attr("id");
    $("#main").text(id);
});

function setUpBoard() {
    $("#r2 div").append("<img src='images/white_pawn.png'>");
    $("#r7 div").append("<img src='images/black_pawn.png'>");

    $("#1a, #1h").append("<img src='images/white_rook.png'>");
    $("#8a, #8h").append("<img src='images/black_rook.png'>");
    $("#1b, #1g").append("<img src='images/white_knight.png'>");
    $("#8b, #8g").append("<img src='images/black_knight.png'>");
    $("#1c, #1f").append("<img src='images/white_bishop.png'>");
    $("#8c, #8f").append("<img src='images/black_bishop.png'>");
    $("#1d").append("<img src='images/white_queen.png'>");
    $("#8d").append("<img src='images/black_queen.png'>");
    $("#1e").append("<img src='images/white_king.png'>");
    $("#8e").append("<img src='images/black_king.png'>");
}

function move(from, to) {
    var piece = $("#"+from).html();
    $("#"+from).html("");
    $("#"+to).html(piece);
}

setUpBoard();

var secondClick = false;
var firstClick = "";
$(".square").click(function(event) {
    if (!secondClick) {
        firstClick = $(this).attr("id");
        secondClick = true;
    } else {
        move(firstClick, $(this).attr("id"));
        secondClick = false;
    }
});
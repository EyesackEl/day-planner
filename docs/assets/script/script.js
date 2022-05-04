var currentDay = moment().format("dddd, MMMM Do");
var currentHour = parseInt(moment().format("k"));
var saveBtn = document.getElementsByTagName("BUTTON");
var hourRows = document.getElementsByClassName("custom-row")


console.log("Hour Rows: " , hourRows)
$("#currentDay").text(currentDay);

console.log("Current Hour: " + currentHour);

//Wrapping setting backgroudn color in timer to update css dynamically
//as hour changes
timer = setInterval(function() {
    //Sets background color for past, present, and future timeblocks
    if (currentHour < 9) {
        $(hourRows).addClass("future");

        $(hourRows).removeClass("present");

        $(hourRows).removeClass("past");

    } else if (currentHour === 9) {
        for (i = 1; i < hourRows.length; i++) {
            $(hourRows[i]).addClass('future');
        }

        $(hourRows[0]).addClass('present'); 

    } else if (currentHour === 10) {
        for (i = 2; i < hourRows.length; i++) {
            $(hourRows[i]).addClass('future');
        }

        $(hourRows[1]).addClass('present');

        for (i = 0; i < ((hourRows.length)-8); i++) {
            $(hourRows[i]).addClass('past');
        }

    } else if (currentHour === 11) {
        for (i = 3; i < hourRows.length; i++) {
            $(hourRows[i]).addClass('future');
        }

        $(hourRows[2]).addClass('present');

        for (i = 0; i < ((hourRows.length)-7); i++) {
            $(hourRows[i]).addClass('past');
        }

    } else if (currentHour === 12) {
        for (i = 4; i < hourRows.length; i++) {
            $(hourRows[i]).addClass('future');
        }

        $(hourRows[3]).addClass('present');

        for (i = 0; i < ((hourRows.length)-6); i++) {
            $(hourRows[i]).addClass('past');
        }

    } else if (currentHour === 13) {
        for (i = 5; i < hourRows.length; i++) {
            $(hourRows[i]).addClass('future');
        }

        $(hourRows[4]).addClass('present');

        for (i = 0; i < ((hourRows.length)-5); i++) {
            $(hourRows[i]).addClass('past');
        }

    } else if (currentHour === 14) {
        for (i = 6; i < hourRows.length; i++) {
            $(hourRows[i]).addClass('future');
        }

        $(hourRows[5]).addClass('present');

        for (i = 0; i < ((hourRows.length)-4); i++) {
            $(hourRows[i]).addClass('past');
        }

    }else if (currentHour === 15) {
        for (i = 7; i < hourRows.length; i++) {
            $(hourRows[i]).addClass('future');
        }

        $(hourRows[6]).addClass('present');

        for (i = 0; i < ((hourRows.length)-3); i++) {
            $(hourRows[i]).addClass('past');
        }

    }else if (currentHour === 16) {
        for (i = 8; i < hourRows.length; i++) {
            $(hourRows[i]).addClass('future');
        }

        $(hourRows[7]).addClass('present');

        for (i = 0; i < ((hourRows.length)-2); i++) {
            $(hourRows[i]).addClass('past');
        }

    }else if (currentHour === 17) {
        for (i = 9; i < hourRows.length; i++) {
            $(hourRows[i]).addClass('future');
        }

        $(hourRows[8]).addClass('present');

        for (i = 0; i < ((hourRows.length)-1); i++) {
            $(hourRows[i]).addClass('past');
        }

    }else if (currentHour >= 18) {
        console.log ('more than 18!')

        for (i = 0; i < hourRows.length; i++) {
            $(hourRows[i]).removeClass("future");
            $(hourRows[i]).removeClass("present");
            $(hourRows[i]).addClass("past");
        }
}

}, 1)



$(saveBtn).click(function() {

})
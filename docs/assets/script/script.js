var currentDay = moment().format("dddd, MMMM Do");
var currentHour = parseInt(moment().format("k"));
var inputBoxes = document.getElementsByClassName("input")
var saveBtn = document.getElementsByTagName("BUTTON");
var hourRows = document.getElementsByClassName("custom-row")


// Setting the current day at the top of the page
$("#currentDay").text(currentDay);
console.log("Input Boxes: ", inputBoxes)
console.log("Hour Rows: " , hourRows)
console.log("Current Hour: " + currentHour);

// Wrapping background color in timer to update css dynamically
// as hour changes
timer = setInterval(function() {
    // Reseting classes
    $(hourRows).removeClass(["future", "present", "past"]);
    // Sets background color for past, present, and future timeblocks
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

// Saving the text the user inputs to local storage
$(saveBtn[0]).click(function() {
    console.log($(inputBoxes[0]).val())
    localStorage.setItem("input0", $(inputBoxes[0]).val());
})
$(saveBtn[1]).click(function() {
    localStorage.setItem("input1", $(inputBoxes[1]).val());
})
$(saveBtn[2]).click(function() {
    localStorage.setItem("input2", $(inputBoxes[2]).val());
})
$(saveBtn[3]).click(function() {
    localStorage.setItem("input3", $(inputBoxes[3]).val());
})
$(saveBtn[4]).click(function() {
    localStorage.setItem("input4", $(inputBoxes[4]).val());
})
$(saveBtn[5]).click(function() {
    localStorage.setItem("input5", $(inputBoxes[5]).val());
})
$(saveBtn[6]).click(function() {
    localStorage.setItem("input6", $(inputBoxes[6]).val());
})
$(saveBtn[7]).click(function() {
    localStorage.setItem("input7", $(inputBoxes[7]).val());
})
$(saveBtn[8]).click(function() {
    localStorage.setItem("input8", $(inputBoxes[8]).val());
})

// Renders users previously entered text from local storage when page loads
function renderLists() {
        $(inputBoxes[0]).val(localStorage.getItem("input0"))
        $(inputBoxes[1]).val(localStorage.getItem("input1"))
        $(inputBoxes[2]).val(localStorage.getItem("input2"))
        $(inputBoxes[3]).val(localStorage.getItem("input3"))
        $(inputBoxes[4]).val(localStorage.getItem("input4"))
        $(inputBoxes[5]).val(localStorage.getItem("input5"))
        $(inputBoxes[6]).val(localStorage.getItem("input6"))
        $(inputBoxes[7]).val(localStorage.getItem("input7"))
        $(inputBoxes[8]).val(localStorage.getItem("input8"))
}

renderLists();
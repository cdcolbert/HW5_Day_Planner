
$(document).ready(function() {

    var timeArray = ["9:00 AM","10:00 AM","11:00 AM", "12:00 PM", "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];
    var tasksArray = [];
    var dateTime = moment().format('llll');

    $("#currentDay").text(dateTime);


    init();

    function init() {        
        createTimeSlots();
    }
    
    function createTimeSlots(){

        for (var i = 0; i < timeArray.length; i++) {
            var hourIndex = i;
            var timeSlot = $("<div></div>").addClass("time-block row");
            var timeDisplay = $("<div></div>").addClass("hour col-2").text(timeArray[hourIndex]);
            var taskText = $("<textarea></textarea>").addClass("input" + hourIndex + " description col-9 border-top border-bottom").text("");
            var button = $("<button></button>").addClass("saveBtn col-1").attr("data-btnIndex", hourIndex).text("Save");
            
            $(".container").append(timeSlot);
            timeSlot.append(timeDisplay,taskText,button);
        }
    }

    


});


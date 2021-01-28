
$(document).ready(function() {

    var tasksArray = [];
    var timeArray = ["9:00 AM","10:00 AM","11:00 AM", "12:00 PM", "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];    
    var dateTime = moment().format('llll');

    $("#currentDay").text(dateTime);


    init();

    function init() {       
        var tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks !== null) {
           tasksArray = tasks;
        } else{
            tasksArray = new Array();
            saveTasks();
        } 

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
            setColor(taskText, i);
        }
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
    }

    $(".saveBtn").on("click",function(e){
        e.preventDefault(); 
        let index = $(this).attr("data-btnIndex");  
        let taskText = $(".input"+index).val();

        tasksArray[index] = taskText;
        console.log(tasksArray);
        
        saveTasks();

    });

    function setColor(row,hour){
        if(hour < parseInt(moment().format('H'))){
            row.addClass("timePast");
        }else if(hour > parseInt(moment().format('H'))){
            row.addClass("timeFuture");
        }else{
            row.addClass("timePresent");
        }
    }
    
});


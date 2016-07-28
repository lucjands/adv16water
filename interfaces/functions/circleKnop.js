(function() {
	var activityFields = {};
	var circleKnop = {};
	var activityMinMax = {};

	circleKnop.init = function(activity, activityNr, activityData, activityFlds) {

		console.log("Knop closure testing");

		activityMinMax = activityData;
		activityFields = activityFlds;

		var min = activityMinMax[activity].min;
		var max = activityMinMax[activity].max;

		$("#knopInterface #title").html(activity);
        $('.dial').val(min).knob({
            "min": min,
            "max": max,
            "fgColor": "#A94442",
            "bgColor": "#FFFFFF",
            'change': function (v) {
                console.log(v);
                userData.setActivityValue(v);

                timeUse.updateCountrySelect(userData.getCurrentActivity(), userData.getCurrentActivityNr());
            }
        });


		//button needs to bee specified
		$('.circleButton').click(function () {
		    direction = $(this).attr('id');
		    console.log(direction);
		    
		    if(direction === 'left' && activityNr != 0) {
		        activityNr--;
		        userData.setCurrentActivityNr(activityNr);
		        circleKnop.changeCircle(activityFields[activityNr], activityNr);
		        

		        // activity = actArr[activityNr];
		        // console.log("activity: " + activity);
		        // console.log(actArr);
		        
		        // changeButton();
		    } else if(direction === 'right' && activityNr != (activityFields.length-1)) {
		        activityNr++;
		        userData.setCurrentActivityNr(activityNr);
		        circleKnop.changeCircle(activityFields[activityNr], activityNr);

		        // activity = actArr[activityNr];
		        // console.log("activityNr: " + activityNr);
		        // console.log("activity: " + activity);
		        // console.log(actArr);
		        
		        // changeButton();
		    }
		})

	}

	circleKnop.changeCircle = function(activity, activityNr){

		console.log(67, "changeCircle");

		var min = activityMinMax[activity].min;
		var max = activityMinMax[activity].max;

		$("#title").html(activity);
        $('.dial').val(min).trigger('change').knob({
            //UI
            "min": min,
            "max": max,
            "fgColor": "#A94442",
            "bgColor": "#FFFFFF",
            "cursor": true,

            //Behaviors
            'change': function (v) {
                console.log(v);
                userData.setActivityValue(v);
                
                
                timeUse.updateCountrySelect(userData.getCurrentActivity(), userData.getCurrentActivityNr());
            }
        });
	}



	window.circleKnop = circleKnop;
})();
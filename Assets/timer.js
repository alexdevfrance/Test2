
	$(function(){

		function setTimer(){
			var setMinutes = prompt("Set the minutes :");
			var setSeconds = prompt("Set the seconds :");
			
			if( $.isNumeric(setMinutes) == false || $.isNumeric(setSeconds) == false || setMinutes <0 || setSeconds <0){
				alert('Set numbers superiors to zero !');
				//ask to set minutes and seconds while the numbers are inferiors to zero
				setTimer();
			}
			else
			{
				table = {seconds: setSeconds, minutes : setMinutes};
			}
			return table;
		}
		
		function timer()
		{
			//set the seconds to 59 when they are equal to 0
			if(seconds == 0 && minutes != 0){
				seconds = 59;
				minutes = minutes - 1;
			}
			//set a message when the timer ends
			else if(minutes == 0 && seconds == 0){
				alert("It's the end !");
				//stop the timer's execution
				clearInterval(executeTimer);
			}
			else {
				seconds = seconds-1;
			}

			//write the minutes and the seconds at the right place and set a zero in front of the number if seconds or minutes are inferiors to ten
			if(minutes >= 10){
				$('#minutes').text(minutes);
			}
			else{
				$('#minutes').text('0'+minutes);
			}
			
			if(seconds >= 10){
				$('#seconds').text(seconds);
			}
			else{
				$('#seconds').text('0'+seconds);
			}
			
		}


		tableTimer = setTimer();
		 console.log(tableTimer);
	
		minutes = tableTimer.minutes;
		seconds = tableTimer.seconds;

			//execute the function at every second
			var executeTimer = setInterval(timer, 1000);
	
			
		});

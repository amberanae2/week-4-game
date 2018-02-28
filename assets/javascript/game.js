/// random numer b/t 19-120
/// crystals should have numbers 1-12
/// create varaiable for wins/losses
/// create user variables 
/// create a variable for each gem stone
/// add in a math random for random number
/// add in a math random for gemstones 

	var Random=Math.floor(Math.random()*101+19)
	
	$('#random').html(randomNumber);
	
	var gem1= Math.floor(Math.random()*12+1)
	var gem2= Math.floor(Math.random()*12+1)
	var gem3= Math.floor(Math.random()*12+1)
	var gem4= Math.floor(Math.random()*12+1)
	var totalScore= 0; 
	var wins= 0;
	var losses = 0;
	
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  
  function reset(){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#randomNumber').text(Random);
		gem1= Math.floor(Math.random()*12+1);
		gem2= Math.floor(Math.random()*12+1);
		gem3= Math.floor(Math.random()*12+1);
		gem4= Math.floor(Math.random()*12+1);
		totalScore= 0;
		$('#finalTotal').text(userTotal);
		} 
 
  function Congrats(){
  alert("You won!");
	wins++; 
	$('#numberWins').text(wins);
	reset();
  }
  
  function loser(){
  alert ("You lose!");
	losses++;
	$('#numberLosses').text(losses);
	reset()
  }

  //// need to add in a reset button to keep game continous
  
	$('#gem1').on('click', function(){
	  userTotal = userTotal + gem1;
	  console.log("New userTotal= " + total);
	  $('#finalTotal').text(total); 
			
		  if (userTotal == Random){
			Congrats();
		  }
		  else if ( userTotal > Random){
			loser();
		  }   
	})  
	$('#gem2').on('click', function(){
	  userTotal = userTotal + gem2;
	  console.log("New userTotal= " + total);
	  $('#finalTotal').text(total); 
		  if (userTotal == Random){
			yay();
		  }
		  else if ( userTotal > Random){
			loser();
		  } 
	})  
	$('#gem3').on('click', function(){
	  userTotal = userTotal + gem3;
	  console.log("New userTotal= " + total);
	  $('#finalTotal').text(total);

			if (userTotal == Random){
			yay();
		  }
		  else if ( userTotal > Random){
			loser();
		  } 
	})  
	$('#gem4').on('click', function(){
	  userTotal = userTotal + gem4;
	  console.log("New userTotal= " + total);
	  $('#finalTotal').text(total); 
		
			if (total == Random){
			yay();
		  }
		  else if ( total > Random){
			loser();
		  }

		  Week4Game.setupGame();
	})   
 
	/// document has syntax errors with $() jquery function
	/// tried adding in different on click functions to start game didnt seem to work.
	/// 
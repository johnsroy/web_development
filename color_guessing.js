<!DOCTYPE html>
<html>
	<head>
		<title>Color Guessing game</title>
	</head>
	<body onload="do_game()">
		<script type="text/javascript">
			//1.
			var colors = ["blue", "gray", "yellow", "green","black", "cyan", "purple", "silver", "orange", "lime", "magenta", "olive", "maroon", "brown", "darkblue", "lightblue"];
			colors = colors.sort();
			//2.
			function do_game() {
				//2.1
				var target_index = Math.floor(Math.random() * (colors.length - 0)) + 0;
				//2.2
				var target = colors[target_index];
				var message = "I am thinking of one of these colors:\n\n";
				for (var i = 0 ; i < colors.length ; i++) {
					message += colors[i];
					if (i == (colors.length-2)){
						message += " and ";
					} else if (i != (colors.length-1)) {
						message += ", ";
					}
				}
				var guess_input;
				var finished = false;
				var gameCount = 0;
				alert(target);
				//2.3
				while (!finished){
					guess_input = prompt(message).toLowerCase();
					gameCount++;
					finished = check_guess(guess_input,target);
					if (finished) {
						var myBody = document.getElementsByTagName("body")[0];
						myBody.style.background = target;
						alert("Congratulations! You have guessed the color!\n\nIt took you " + gameCount + " guesses to finish the game!\n\nYou can see the colour in the background.");
					}
					
				}
				var myBody = document.getElementsByTagName("body")[0];
				myBody.style.background = target;
			}
			//3.
			function check_guess(guess, target) {
				if (colors.indexOf(guess)<0) {
					//3.1
					alert("Sorry, I don't recognize your color.\n\nPlease try again.");
					return false;
				} else if(guess > target) {
					//3.2
					alert("Sorry, your guess is not correct!\n\nHint: Your color is alphabetically higher than mine.\n\nPlease try again.");
				} else if (guess < target) {
					//3.3
					alert("Sorry, your guess is not correct!\n\nHint: Your color is alphabetically lower than mine.\n\nPlease try again.");
				} else {
					return true;
				}
			}
		</script>
	</body>
</html>
$(function () {
		var click_counter = 0;
		var playerturn = true;
		$('.game_zone').click(function (ev) {
				var el = $(this);
				
				if(el.hasClass('taken') || !playerturn)
						return;
				
				el.addClass('taken');
				
				click_counter++;
				// alert(click_counter);

				el.find('div').html('X');
				
				winner(isdone());

				function winner(winner){
					if(winner == 'X' || winner == 'O'){
						alert('Game is over, '+winner+' won!');
					}else if(winner == 'TIE'){
						alert('Game is over, Tie!');
					}else{
						playerturn = false;
						setTimeout(ai_move, 250);
					}
				}      
		});
		
		function ai_move(){
				// alert('AI Move + Click = ' + click_counter);
				// AI logics
				var values = [];
				for(var i = 1; i <= 9; i++){
						values[i] = $('#'+i).find('div').html();
				}
				//alert('AI Move + Click = ' + click_counter + ' Values = ' + values);
				if(click_counter == 1){
					// TURN 1


					if(values[5] != 'X'){
							$('#5').addClass('taken').find('div').html('O');
					}else{
						$('#7').addClass('taken').find('div').html('O');
					}
				}else if(click_counter == 2){
					// TURN 2

					if(values[5] == 'X' && values[1] == 'X'){
						$('#9').addClass('taken').find('div').html('O');
					}
					if(values[5] == 'X' && values[2] == 'X'){
						$('#8').addClass('taken').find('div').html('O');
					}
					if(values[5] == 'X' && values[3] == 'X'){
						$('#1').addClass('taken').find('div').html('O');
					}
					if(values[5] == 'X' && values[4] == 'X'){
						$('#6').addClass('taken').find('div').html('O');
					}
					if(values[5] == 'X' && values[6] == 'X'){
						$('#4').addClass('taken').find('div').html('O');
					}
					if(values[5] == 'X' && values[8] == 'X'){
						$('#2').addClass('taken').find('div').html('O');
					}
					if(values[5] == 'X' && values[9] == 'X'){
						$('#1').addClass('taken').find('div').html('O');
					}

					// When O is center
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#2').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#7').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 'X') && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 'X') && (values[8] == 8) && (values[9] == 9)){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 'X') && (values[9] == 9)){
						$('#7').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 'X')){
						$('#2').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 'X') && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 'X') && (values[8] == 8) && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 'X') && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 'X')){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 'X') && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 'X') && (values[8] == 8) && (values[9] == 9)){
						$('#2').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 'X') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 'X')){
						$('#6').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'O') && (values[6] == 'X') && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#2').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'O') && (values[6] == 6) && (values[7] == 'X') && (values[8] == 8) && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 'X') && (values[9] == 9)){
						$('#7').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 'X')){
						$('#7').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 'X') && (values[7] == 'X') && (values[8] == 8) && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 'X') && (values[7] == 7) && (values[8] == 'X') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 'X') && (values[7] == 7) && (values[8] == 8) && (values[9] == 'X')){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 'X') && (values[8] == 'X') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 'X') && (values[8] == 8) && (values[9] == 'X')){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 'X') && (values[9] == 'X')){
						$('#7').addClass('taken').find('div').html('O');
					}

				}else if(click_counter == 3){
					// TURN 3
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#2').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'O')){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'O')){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'O')){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'O')){
						$('#8').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 'X')){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == "O") && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#6').addClass('taken').find('div').html('O');
					}
					if((values[1] == "O") && (values[2] == 'X') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == "O") && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == "O") && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == "O") && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#4').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#2').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#1').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 3) && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#1').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#6').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'X')){
						$('#1').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'O') && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#6').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 2) && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 2) && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'X')){
						$('#4').addClass('taken').find('div').html('O');
					}

					// When O is Center
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 'O') && (values[4] == 'X') && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 'O') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 'X') && (values[7] == 7) && (values[8] == 8) && (values[9] == 9)){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 'O') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 'X') && (values[8] == 8) && (values[9] == 9)){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 'O') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 'X') && (values[9] == 9)){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 'O') && (values[4] == 4) && (values[5] == 'O') && (values[6] == 6) && (values[7] == 7) && (values[8] == 8) && (values[9] == 'X')){
						$('#3').addClass('taken').find('div').html('O');
					}

				}else if(click_counter == 4){
					//TURN 4
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#6').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#4').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'O') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 'X')){
						$('#6').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 'X') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 'X')){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 'X')){
						$('#4').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == "O") && (values[2] == 'X') && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 9)){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == "O") && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#2').addClass('taken').find('div').html('O');
					}
					if((values[1] == "O") && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#2').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'O')){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'O')){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#3').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 'X')){
						$('#1').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'X')){
						$('#1').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'O') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'X')){
						$('#2').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 2) && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'X')){
						$('#2').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'O')){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 'X') && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 8) && (values[9] == 'O')){
						$('#8').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 2) && (values[3] == 3) && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#2').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#6').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#4').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#6').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'O')){
						$('#4').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'x')){
						$('#1').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'X') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#9').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 9)){
						$('#1').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'O') && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'x')){
						$('#1').addClass('taken').find('div').html('O');
					}
					// Next
					if((values[1] == 'O') && (values[2] == 'O') && (values[3] == 'X') && (values[4] == 4) && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'X')){
						$('#4').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 6) && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'X')){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 'O') && (values[2] == 'O') && (values[3] == 3) && (values[4] == 4) && (values[5] == 'X') && (values[6] == 'X') && (values[7] == 'O') && (values[8] == 'X') && (values[9] == 'x')){
						$('#3').addClass('taken').find('div').html('O');
					}
					if((values[1] == 1) && (values[2] == 'X') && (values[3] == 3) && (values[4] == 'X') && (values[5] == 'X') && (values[6] == 'O') && (values[7] == 'O') && (values[8] == 'O') && (values[9] == 'X')){
						$('#1').addClass('taken').find('div').html('O');
					}

					// When O is Center
					
				}
				playerturn = true;
		}
		
		function isdone(){
				// alert('isdone');
				var values = [];
				for(var i = 1; i <= 9; i++){
						values[i] = $('#'+i).find('div').html();
				}
				//row 1 horizontal
				if(values[1] == values[2] && values[1] == values[3]){
						return values[1];   
				}
				//row 2 horizontal
				if(values[4] == values[5] && values[4] == values[6]){
						return values[4];
				}
				//row 3 horizontal
				if(values[7] == values[8] && values[7] == values[9]){
						return values[7];   
				}
				//diagonal top left to bottom right
				if(values[1] == values[5] && values[1] == values[9]){
						return values[1];
				}
				//diagonal bottom left to top right
				if(values[7] == values[5] && values[7] == values[3]){
						return values[7];
				}
				//row 1 vertical
				if(values[1] == values[4] && values[1] == values[7]){
						return values[1];   
				}
				//row 2 vertical
				if(values[2] == values[5] && values[2] == values[8]){
						return values[2];   
				}
				//row 3 vertical
				if(values[3] == values[6] && values[3] == values[9]){
						return values[3];   
				}
				if(click_counter == 5){
					return 'TIE';
				}
				return false;
		}
		
});
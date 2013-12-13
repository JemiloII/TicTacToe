function aaai_move(){
				// alert('AI Move + Click = ' + click_counter);
				// AI logics
				var values = [];
				for(var i = 1; i <= 9; i++){
						values[i] = $('#'+i).find('div').html();
				}
				//alert('AI Move + Click = ' + click_counter + ' Values = ' + values);
				if(click_counter == 1){
					// TURN 1
					$('#5')

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
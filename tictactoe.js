

$(function () {
	var click_counter = 0;
	var playerturn = true;
	var human;
	var recentmove;
	
	$('.game_zone').click(function (ev) {
		var el = $(this);
		
		if(el.hasClass('taken') || !playerturn)
				return;
		
		el.addClass('taken');
		
		click_counter++;
		// alert(click_counter);

		el.find('div').html('X');
		human.push(el.attr('id'));
		recentmove = el.attr('id');
		
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
	function game_board_reset(){
		var values = [];
		for(var i = 1; i <= 9; i++){
				values[i] = $('#'+i).removeClass('taken').find('div').html(i);
		}


	}


	function ai_move(){
		// AI logics
		
		// var values = [];
		// for(var i = 1; i <= 9; i++){
		// 		values[i] = $('#'+i).find('div').html();
		// }
		//alert('AI Move + Click = ' + click_counter + ' Values = ' + values);
		if(click_counter == 1){
			// TURN 1
			$('#5')

			if(values[5] != 'X'){
					$('#5').addClass('taken').find('div').html('O');
			}else{
				$('#7').addClass('taken').find('div').html('O');
			}
		}
		if(click_counter ==2){



		}




	}
	function edge_corner_or_center(value){
		if((value % 2) == 0){
			return 'edge';
		}else if(value == 5){
			return "center";
		}else{
			return "corner";
		}
	}

	function find_furthest_corners(edge){
		if(edge == 2){
			var corners = [7,9];
		}
		if(edge == 4){
			var corners = [3,9];
		}
		if(edge == 6){
			var corners = [1,7];
		}
		if(edge == 8){
			var corners = [1,3];
		}
		return corners;
	}

	function find_closest_edge(corner){
		if(corner == 1){
			var edges = [2,4];
		}
		if(corner == 3){
			var edges = [2,6];
		}
		if(corner == 7){
			var edges = [4,8];
		}
		if(corner == 9){
			var edges = [6,8];
		}
		return edges;
	}

	function smartcast(values){
		//Desigened to Block or Win
		var values = [];
		for(var i = 1; i <= 9; i++){
			values[i] = $('#'+i).find('div').html();
		}
		//row 1 horizontal
		if(values[1] == values[2]){
			move = 3;
			return move;   
		}
		if(values[1] == values[3]){
			move = 2;
			return  move;   
		}
		if(values[2] == values[3]){
			move = 1;
			return move;   
		}
		//row 2 horizontal
		if(values[4] == values[5]){
			move = 6;
			return values[4];
		}
		if(values[4] == values[6]){
			move = 5;
			return  move;   
		}
		if(values[5] == values[6]){
			move = 4;
			return move;   
		}
		//row 3 horizontal
		if(values[7] == values[8]){
			move = 9;
			return move;   
		}
		if(values[7] == values[9]){
			move = 8;
			return  move;   
		}
		if(values[8] == values[9]){
			move = 7;
			return move;   
		}
		//diagonal top left to bottom right
		if(values[1] == values[5]){
			move = 9;
			return move;   
		}
		if(values[1] == values[9]){
			move = 5;
			return  move;   
		}
		if(values[5] == values[9]){
			move = 1;
			return move;   
		}
		//diagonal bottom left to top right
		if(values[3] == values[5]){
			move = 7;
			return move;   
		}
		if(values[3] == values[7]){
			move = 5;
			return  move;   
		}
		if(values[5] == values[7]){
			move = 3;
			return move;   
		}
		//row 1 vertical
		if(values[1] == values[4]){
			move = 7;
			return move;   
		}
		if(values[1] == values[7]){
			move = 4;
			return  move;   
		}
		if(values[4] == values[7]){
			move = 1;
			return move;   
		}
		//row 2 vertical
		if(values[2] == values[5]){
			move = 8;
			return move;   
		}
		if(values[2] == values[8]){
			move = 5;
			return  move;   
		}
		if(values[5] == values[8]){
			move = 2;
			return move;   
		}
		//row 3 vertical
		if(values[3] == values[6]){
			move = 9;
			return move;   
		}
		if(values[3] == values[9]){
			move = 6;
			return  move;   
		}
		if(values[6] == values[9]){
			move = 3;
			return move;   
		}

		if(click_counter == 5){
			return 'TIE';
		}
		return false;
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
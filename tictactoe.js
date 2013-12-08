$(function(){
  var click_counter = 0;
  $('game_board').click(function(){
    click_counter++;

    function isEven(number){
        return (number%2 == 0) ? true : false;
    }

    if(isEven(click_counter)){
      $(this).find('div').html('O');
       alert('Player X Go!');
    }else{
      
      $(this).find('div').html('X');
      alert('Player O Go!');
    }
  }); 
});
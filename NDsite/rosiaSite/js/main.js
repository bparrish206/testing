$(document).ready(function(){
	var ct = 1;
	$('.Bio').hide();
	$('.button').on('click', function(){
		ct++;
		if(ct %2 === 0) {
		$('.Bio').show(2000);
		} else{$('.Bio').hide('slow')}
	});
});



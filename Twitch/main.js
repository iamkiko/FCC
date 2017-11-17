//Run our jQuery
$(function() {
	//FCC Stream info and status API call
var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "lirik"];

$.getJSON('https://api.twitch.tv/kraken/users/freecodecamp?client_id=w8jyhnk3hrpde748nli7gut2i76342').done(function(data){
    if (data.stream === null) {
    	$('#fcc').html(' is offline...');
    } else {
		$('#fcc').html(' is ONLINE!!');
    }
});

for(var i = 0; i < streams.length; i++ ) {
	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/channels/' + streams[i],
		headers: {
			'client-ID':'w8jyhnk3hrpde748nli7gut2i76342'
		}, 
	 success: function(dataI) {
	 	// console.log(dataI);
			$.getJSON('https://api.twitch.tv/kraken/streams/' + dataI.name + '?client_id=w8jyhnk3hrpde748nli7gut2i76342').done(function(data2){
			   	console.log(data2);

			   	var name = data2._links.self.slice(37);
			   	// console.log(name);


		    	if (data2.stream === null) {
		    	$('#user').append('<br><a target="blank" href="https://www.twitch.tv/' + name + '">' + name + '</a></br>');
		    	$('#status').append('<br>Offline</br>');
		    	$('#game').append('<br>Not playing</br>');
		   	 } else {
				$('#user').append('<br><a target="blank" href="https://www.twitch.tv/' + name + '">' + name + '</a></br>');
				$('#status').append('<br>Online</br>');
				$('#game').append('<br>' + data2.stream.game + '</br>');
		    	}
			});
	},
			error: function(err) {
				$('#user').append(streams[i] + '<br>');
		    	$('#status').append('Not Found</br>');
		    	$('#game').append('Not Found<</br>');
			}
	 });

};
	

});
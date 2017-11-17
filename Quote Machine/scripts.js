$(document).ready(function(){ //when webpage loads, do this:

	var quote;
	var author;

	function getNewQuote() {
		$.ajax({
			url: 'https://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(response) {
				quote = response.quoteText;
				author = response.quoteAuthor;
				$('#quote').text(quote);
				if (author) {
					$('#author').text('said by ' + author);
				} else {
					$('#author').text('- unknown');
				}
			}
		})
	}
	getNewQuote();
	$('#generate').on('click', function(e){
		e.preventDefault();
		getNewQuote();
	});
	$('#tweet').on('click', function(e){
		e.preventDefault();
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' --' + author));
	});
});

$(function () {

	// request to /blocks, then append results to block-list
	$.get('/blocks', appendToList);

	function appendToList(blocks) {
		let list = [];
		for(var i in blocks)
			list.push($('<li>', { text: blocks[i] }))

		$('.block-list').append(list);

	}
});
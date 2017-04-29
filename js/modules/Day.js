var Day = (function() {
	var date = new Date()
	var id

	var init = function (elementId) {
		id = elementId;

		getSlots()
		calculateHeight()
		// renderHatchMarks()
	}

	function getSlots() {
		var data = [
			{
				start: 9,
				end: 12
			}, 
			{
				start:13,
				end: 16
			}
		]
		Slot.renderSlots(data, id)
	}

	function calculateHeight() {
		return $("#"+id).find("div.slots").height()
	}

	return {
		init: init
	}
})();
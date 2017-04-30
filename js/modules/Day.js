var Day = (function() {
	var date = new Date(),
		height,
		id,
		interval = {}

	var init = function (elementId) {
		id = elementId
		height = calculateHeight()
		interval = { start: 6, end: 22 }
		
		getSlots()
		renderHatchMarks()
	}

	function getSlots() {
		var data = [
			{
				start: 9,
				end: 12
			}, 
			{
				start:14,
				end: 16
			}
		]
		Slot.renderSlots(data, {id: id, height: height, interval: interval})
	}

	function calculateHeight() {
		return $("#"+id).find("div.slots").height()
	}

	function renderHatchMarks() {
		var range = interval.end - interval.start
	}

	return {
		init: init
	}
})();
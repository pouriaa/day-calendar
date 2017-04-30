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
				content: "First event",
				start: 9,
				end: 12
			}, 
			{
				content: "Second event",				
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
		var hatchSpacing = height / range
		for (var i = 0; i < height; i += hatchSpacing) {
			$("<span class='hatch-mark'></p>").appendTo($("#" + id).find('.slots')).css({top: i})
		}
	}

	return {
		init: init
	}
})();
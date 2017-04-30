var Day = (function() {
	var id,
		height,
		interval = {},
		date = new Date()

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
				start: dummyRangeInt(9, 11),
				end: dummyRangeInt(12, 15)
			},
			{
				content: "Second event",			
				start: dummyRangeInt(15, 18),
				end: dummyRangeInt(19, 21)
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
			$("<span class='hatch-mark'></p>")
				.appendTo($("#" + id).find('.slots'))
				.css({top: i})
		}
	}

	/** TEMP **/
	function dummyRangeInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	return {
		init: init
	}
})();
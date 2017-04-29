var Slot = (function() {
	var date = new Date()
	var parentId

	var renderMultiple = function (slots, dayId) {
		parentId = dayId
		for (var i = 0; i < slots.length; i++) {
			render(slots[i])
		}
	}

	var render = function (slot) {
		var yStart 	= fromTop(slot.start) 	// as a percentage
		var yEnd 	= fromTop(slot.end)
	}

	function fromTop (pointB) {
		console.log(pointB)
	}
	return {
		renderSlots: renderMultiple
	}
})();
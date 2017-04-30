var Slot = (function() {
	var date = new Date()
	var day

	var renderMultiple = function (slots, parent) {
		day = parent
		for (var i = 0; i < slots.length; i++) {
			render(slots[i], day)
		}
	}

	var render = function (slot, day) {
		
		// ratios between 0 and 1
		var yStart 	= fromTopPercent(slot.start, day.interval)
		var yEnd 	= fromTopPercent(slot.end, day.interval)
		var slotHeight = (yEnd - yStart) * day.height

		var slotStyle = {
			top: yStart * day.height,
			height: slotHeight
		}
		$("<section>"+slot.content+"</section>").appendTo($("#" + day.id).find(".slots")).css(slotStyle)
	}

	function fromTopPercent (point, interval) {
		pointA = point - interval.start
		return pointA / (interval.end - interval.start)
	}

	return {
		renderSlots: renderMultiple
	}
})();
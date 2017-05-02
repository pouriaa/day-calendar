var Slot = (function() {
	var day
	var content = {}
	var date = new Date()

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
		var markup = slotContentMarkup(slot)
		
		$(markup).appendTo($("#" + day.id).find(".slots")).css(slotStyle)
	}

	function slotContentMarkup(slot) {
		content.startTime = ((slot.start - 12) >= 1) ? Math.floor(slot.start - 12) + ":" + Math.round((slot.start % 1) * 60) + "pm" :  Math.floor(slot.start) + ":" + Math.round((slot.start % 1) * 60) + "am"
		content.endTime = ((slot.end - 12) >= 1) ? Math.floor(slot.end - 12) + ":"+ Math.round((slot.end % 1) * 60) + "pm" : slot.end + "am"

		var contentMarkup = 
			"<section>" +
				"<span class='start-time'>" + content.startTime + "</span><br/>" +
				"<span class='end-time'>" + content.endTime + "</span>" +
			"</section>"

		return contentMarkup
	}

	function fromTopPercent (point, interval) {
		pointA = point - interval.start
		return pointA / (interval.end - interval.start)
	}

	return {
		renderSlots: renderMultiple
	}
})();
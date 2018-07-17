frappe.views.calendar["Meeting"] = {
	field_map: {
		"start": "start",
		"end": "end",
		"id": "name",
		"title": "title",
		"docstatus":1,
		"allDay":"all_day"
	},
	get_events_method: "meeting.api.get_meetings"
}
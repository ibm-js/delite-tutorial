define([
	"delite/register",
	"delite/Widget",
    "requirejs-dplugins/css!./TitleWidget/css/TitleWidget.css"
], function (register, Widget) {
	return register("title-widget", [HTMLElement, Widget], {
		baseClass: "title-widget",
		value: "The Title",

		render: function () {
			// build static part of the display
			var title = this.ownerDocument.createElement("span");
			title.innerText = "title:";
			this.appendChild(title);
			this.appendChild(this._h = this.ownerDocument.createElement("h1"));
		},

		refreshRendering: function (props) {
			// if the value change update the display
			if ("value" in props) {
				this._h.innerText = "old= '" + props["value"] + "', new='" + this.value + "'";
			}
		}
	});
});
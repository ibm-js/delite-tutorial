define([
	"delite/register",
	"delite/Widget",
	"delite/handlebars!./BlogPost/BlogPost.html",
	"requirejs-dplugins/css!./BlogPost/css/BlogPost.css"
], function (register, Widget, template) {
	return register("blog-post", [HTMLElement, Widget], {
		baseClass: "blog-post",
		value: "",
		publishDate: new Date().toString(),
		author: "",
		template: template
	});
});

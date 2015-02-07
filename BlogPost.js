define([
	"delite/register",
	"delite/Widget",
	"delite/Container",
	"delite/handlebars!./BlogPost/BlogPost.html",
	"delite/theme!./BlogPost/css/BlogPost.css"
], function (register, Widget, Container, template) {
	return register("blog-post", [HTMLElement, Widget, Container], {
		baseClass: "blog-post",
		value: "",
		publishDate: new Date().toString(),
		author: "",
		template: template
	});
});

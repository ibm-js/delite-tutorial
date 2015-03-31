define([
	"delite/register",
	"delite/Widget",
	"delite/Container",
	"delite/handlebars!./BlogPost/BlogPost.html",
	"delite/theme!./BlogPost/css/{{theme}}/BlogPost.css"
], function (register, Widget, Container, template) {
	return register("blog-post", [HTMLElement, Widget, Container], {
		baseClass: "blog-post",
		value: "",
		publishDate: new Date().toString(),
		author: "",
		template: template
	});
});

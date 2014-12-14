var ids = ['close', 'hamburger'];
var myIcons = new SVGMorpheus('#icons');
$("#menu-toggle").click(function() {
	var thisId = currentId === 1 ? 0 : 1
	currentId = thisId;
	myIcons.to(ids[currentId], {
		duration: 1000,
		easing: "quint-out",
		rotation: "counterclockwise"
	});
});
var mq = window.matchMedia( "(min-width: 768px)" );
if (mq.matches) {
	currentId = 0;
}
else {
	currentId = 1;
	myIcons.to('hamburger');
	$('ul.sidebar-nav li').click(function(e){ 
		$("#wrapper").toggleClass("toggled");
		var thisId = currentId === 1 ? 0 : 1
		currentId = thisId;
		myIcons.to(ids[currentId], {
			duration: 1000,
			easing: "quint-out",
			rotation: "counterclockwise"
		});
	});		
};

if (matchMedia) {
	var mq = window.matchMedia("(min-width: 768px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}
function WidthChange(mq) {
	if (mq.matches) {
		currentId = 0;
		myIcons.to('close');
	}
	else {
		currentId = 1;
		myIcons.to('hamburger');
	}
}	
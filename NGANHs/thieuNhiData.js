var auInfo = {
	title: ["Cute Dog"],

	time: ["12-2-2016"],

	description: [

		"<p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p><p>Many people also have their own barometers for what makes a cute dog.</p>"]
};

var thieuInfo = {
	title: ["Cute Dog"],

	time: ["12-2-2016"],

	description: [

		"<p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p><p>Many people also have their own barometers for what makes a cute dog.</p>"
]
};

var nghiaInfo = {
	title: ["Cute Dog"
			],

	time: ["12-2-2016"],

	description: [

		"<p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p><p>Many people also have their own barometers for what makes a cute dog.</p>"
]
};

var nganh;

var holder = document.getElementById("dis");
var num = holder.innerHTML;
//alert(num);
if(num == 0){
	nganh = auInfo;
}else if(num == 1){
	nganh = thieuInfo;
}else{
	nganh = nghiaInfo;
}

var content = "";

for(var i = 0; i < nganh.title.length; i++){
	content += "<div class=\"column\" style=\"width:inherit;\"><div class=\"ui card\" style=\"margin-right:auto; margin-top:0;\"><div class=\"content\"><div class=\"header\">" + nganh.title[i] + "</div>" +
	      "<div class=\"meta\">" + nganh.time[i] + "</div>" +
	      "<div class=\"description\">" + nganh.description[i] + "</div></div></div></div>";
}

document.getElementById("dis").innerHTML = content;



























var app = require("app");
var BrowserWindow = require("browser-window");
var java = require("java");

app.on('ready', function () {
	var mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});

	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	java.classpath.push("./src");
	var Test = java.import("com.axisj.node.java.example.Test");

	var result = Test.addNumbersSync(2, 3);
	document.write("Result");
	//console.log(result);
})



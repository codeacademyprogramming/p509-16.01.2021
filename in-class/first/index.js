// // // const button = document.querySelector("button");

// button.addEventListener("click", function () {});

// // setInterval(function () {}, 1000);

// // setTimeout((a, b) => a + B, timeout);

// // const sum = (a, b) => {
// // 	return a + b;
// // };

// // sum(5, 4, () => {
// // 	alert("Finihed");
// // }); // 9

// // // function loadJquery(params) {
// // // 	alert(params);
// // // }

// // // function name(params) {
// // // 	alert(params);
// // // }

// // // function name(params) {
// // // 	alert(params);
// // // }

// // // function name(params) {
// // // 	alert(params);
// // // }

// // // name()

// // $("button");
// // // $(document).ready(function () {

// // // });

// // function loadScript(src, callback) {
// // 	let script = document.createElement("script");
// // 	script.src = src;
// // 	script.onload = () => callback(script);
// // 	document.head.append(script);
// // }

// // loadScript(
// // 	"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
// // 	(script) => {
// // 		alert(`Cool, the script ${script.src} is loaded`);
// // 		alert(_); // function declared in the loaded script
// // 	}
// // );

// loadScript("/my/script.js", function (script) {
// 	loadScript("/my/script2.js", function (script) {
// 		loadScript("/my/script3.js", function (script) {
// 			loadScript("/my/script4.js", function (script) {
// 				loadScript("/my/script4.js", function (script) {
// 					loadScript("/my/script5.js", function (script) {
// 						loadScript("/my/script6.js", function (script) {
// 							loadScript("/my/script7.js", function (script) {});
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
// });

// loadScript("1.js", function (error, script) {
// 	if (error) {
// 		handleError(error);
// 	} else {
// 		// ...
// 		loadScript("2.js", function (error, script) {
// 			if (error) {
// 				handleError(error);
// 			} else {
// 				// ...
// 				loadScript("3.js", function (error, script) {
// 					if (error) {
// 						handleError(error);
// 					} else {
// 						// ...continue after all scripts are loaded (*)
// 					}
// 				});
// 			}
// 		});
// 	}
// });

// // loadScript("/my/script.js");
// // loadScript("/my/script2.js");
// // loadScript("/my/script3.js");

// function loadScript(src) {
// 	return new Promise(function (resolve, reject) {
// 		let script = document.createElement("script");
// 		script.src = src;

// 		script.onload = () => resolve(script);
// 		script.onerror = () => reject(new Error(`Script load error for ${src}`));

// 		document.head.append(script);
// 	});
// }

// let promiseObject = loadScript(
// 	"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promiseObject.then(
// 	(script) => alert(`${script.src} is loaded!`),
// 	(error) => alert(`Error: ${error.message}`)
// );

// promise.then((script) => alert("Another handler..."));

// console.log("1");
// setTimeout(() => console.log("2"), 0);
// setTimeout(() => console.log("3"), 0);
// console.log("4");

function myDisplayer(some) {
	document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
	let req = new XMLHttpRequest();
	req.open("GET", "mycar.html");
	req.onload = function () {
		if (req.status == 200) {
			myResolve(req.response);
		} else {
			myReject("File not Found");
		}
	};
	req.send();
});

myPromise.then(
	function (value) {
		myDisplayer(value);
	},
	function (error) {
		myDisplayer(error);
	}
);




















function myDisplayer(some) {
	document.getElementById("demo").innerHTML = some;
  }

  function getFile(myCallback) {
	let req = new XMLHttpRequest();
	req.open('GET', "mycar.htl");
	req.onload = function() {
	  if (req.status == 200) {
		myCallback(this.responseText);
	  } else {
		myCallback("Error: " + req.status);
	  }
	}
	req.send();
  }

  getFile(myDisplayer);

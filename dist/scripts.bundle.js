webpackJsonp([3],{

/***/ "../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/side-nav.js":
/***/ (function(module, exports) {

module.exports = "window.addEventListener('load',function(){\n    var menuicon = document.getElementById('menuicon');\n    if(menuicon){\n        //menuicon.addEventListener('click', openNav, false);\n        menuicon.addEventListener('click', toggle_menu, true);\n    }\n});\n\n\nfunction toggle_menu() {\n    var sidenav = document.getElementById('mySidenav');\n    var main_content = document.getElementById('main');\n    if (sidenav.style.display === 'none') {\n        sidenav.style.display = 'block';\n        main_content.style.marginLeft = \"250px\";\n    } else {\n        sidenav.style.display = 'none';\n        main_content.style.marginLeft = \"0px\";\n    }\n}\n\nfunction openNav() {\n    document.getElementById(\"mySidenav\").style.width = \"250px\";\n    document.getElementById(\"main\").style.marginLeft = \"250px\";\n    document.body.style.backgroundColor = \"rgba(0,0,0,0.4)\";\n}\n\nfunction closeNav() {\n    document.getElementById(\"mySidenav\").style.width = \"0\";\n    document.getElementById(\"main\").style.marginLeft= \"0\";\n    document.body.style.backgroundColor = \"white\";\n}"

/***/ }),

/***/ "../../../../script-loader/addScript.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/assets/js/side-nav.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/side-nav.js"))

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../script-loader/index.js!../../../../../src/assets/js/side-nav.js");


/***/ })

},[4]);
//# sourceMappingURL=scripts.bundle.js.map
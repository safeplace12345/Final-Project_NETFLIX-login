/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let videos = [\"K-K13wmF8cI\", \"cKkAnVzXMT8\", \"7vSptcbT_ds\"];\r\nconst iframes = `<div class=\"container\">\r\n  <div class=\"monitor\">\r\n    <div class=\"monitorscreen\">\r\n       <img src=\"./original.gif\" alt=\"img.....\" style=\"width:100%; \">\r\n    </div>\r\n  </div>\r\n</div>`;\r\n\r\nconst appendIframes = () => {\r\n  const tVs = document.querySelectorAll(\".tv\");\r\n  tVs.forEach((tv) => {\r\n    tv.insertAdjacentHTML(\"beforeend\", iframes);\r\n  });\r\n};\r\nappendIframes();\r\nfunction mapContent(arr) {\r\n  return arr.map(({ id, title, body }) => {\r\n    return {\r\n      title: `<div\r\n            type=\"button\"\r\n            class=\"py-4 thumb d-flex justify-content-between border border-light\"\r\n            data-bs-toggle=\"collapse\"\r\n            data-bs-target=\"#collapse${id}\"\r\n          >\r\n            <h3 class=\"ms-3 my-auto\">${title}</h3>\r\n            <i class=\"fas fa-plus me-3 my-auto\"></i>\r\n          </div>`,\r\n      body: `<div class=\"collapse questions p-2\" id=\"collapse${id}\">\r\n            ${body}\r\n          </div>`,\r\n    };\r\n  });\r\n}\r\nconst append2ContentDiv = (contents) => {\r\n  const content = document.querySelectorAll(\".content\");\r\n  const hTML = mapContent(contents);\r\n  for (data of hTML) {\r\n    let title = data.title;\r\n    let body = data.body;\r\n    content.forEach((div) => {\r\n      div.insertAdjacentHTML(\"beforeend\", title);\r\n      div.insertAdjacentHTML(\"beforeend\", body);\r\n    });\r\n  }\r\n};\r\n\r\nconst netflixContent = [\r\n  {\r\n    id: 0,\r\n    title: \"What is netflix ?\",\r\n    body: ` Netflix is a streaming service that offers a wide variety of\r\n            award-winning TV shows, movies, anime, documentaries, and more on\r\n            thousands of internet-connected devices. You can watch as much as\r\n            you want, whenever you want without a single commercial – all for\r\n            one low monthly price. There's always something new to discover and\r\n            new TV shows and movies are added every week!`,\r\n  },\r\n  {\r\n    id: 1,\r\n    title: \"How much does Netflix cost?\",\r\n    body: ` Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR13.99 a month. No extra costs, no contracts.`,\r\n  },\r\n  {\r\n    id: 2,\r\n    title: \"Where can I watch?\",\r\n    body: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\r\n\r\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,\r\n  },\r\n  {\r\n    id: 3,\r\n    title: \"How do I cancel?\",\r\n    body: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,\r\n  },\r\n  {\r\n    id: 4,\r\n    title: \"What can I watch on Netflix?\",\r\n    body: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,\r\n  },\r\n  {\r\n    id: 5,\r\n    title: \"How does the free trial work?\",\r\n    body: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,\r\n  },\r\n];\r\nappend2ContentDiv(netflixContent);\r\n\n\n//# sourceURL=webpack://Final-Project-JS/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
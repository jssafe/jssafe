var canvas,context,paint_simple,canvas_simple,context_simple,canvasWidth=1000,canvasHeight=1000,lineWidth=8,clickX=new Array,clickY=new Array,clickDrag=new Array,paint=!1,clickX_simple=new Array,clickY_simple=new Array,clickDrag_simple=new Array;function executeArticleScript(){prepareSimpleCanvas()}function prepareSimpleCanvas(){var e=document.getElementById("canvasSimpleDiv");(canvas_simple=document.createElement("canvas")).setAttribute("width",canvasWidth),canvas_simple.setAttribute("height",canvasHeight),canvas_simple.setAttribute("id","canvasSimple"),e.appendChild(canvas_simple),"undefined"!=typeof G_vmlCanvasManager&&(canvas_simple=G_vmlCanvasManager.initElement(canvas_simple)),context_simple=canvas_simple.getContext("2d"),$("#canvasSimple").mousedown(function(e){addClickSimple(e.pageX-this.offsetLeft,e.pageY-this.offsetTop,!(paint_simple=!0)),redrawSimple()}),$("#canvasSimple").mousemove(function(e){paint_simple&&(addClickSimple(e.pageX-this.offsetLeft,e.pageY-this.offsetTop,!0),redrawSimple())}),$("#canvasSimple").mouseup(function(e){paint_simple=!1,redrawSimple()}),$("#canvasSimple").mouseleave(function(e){paint_simple=!1}),$("#clearCanvasSimple").mousedown(function(e){clickX_simple=new Array,clickY_simple=new Array,clickDrag_simple=new Array,clearCanvas_simple()}),canvas_simple.addEventListener("touchstart",function(e){addClickSimple((e.changedTouches?e.changedTouches[0].pageX:e.pageX)-this.offsetLeft,(e.changedTouches?e.changedTouches[0].pageY:e.pageY)-this.offsetTop,!(paint_simple=!0)),redrawSimple()},!1),canvas_simple.addEventListener("touchmove",function(e){var i=(e.changedTouches?e.changedTouches[0].pageX:e.pageX)-this.offsetLeft,a=(e.changedTouches?e.changedTouches[0].pageY:e.pageY)-this.offsetTop;paint_simple&&(addClickSimple(i,a,!0),redrawSimple()),e.preventDefault()},!1),canvas_simple.addEventListener("touchend",function(e){paint_simple=!1,redrawSimple()},!1),canvas_simple.addEventListener("touchcancel",function(e){paint_simple=!1},!1)}function addClickSimple(e,i,a){clickX_simple.push(e),clickY_simple.push(i),clickDrag_simple.push(a)}function clearCanvas_simple(){context_simple.clearRect(0,0,canvasWidth,canvasHeight)}function redrawSimple(){clearCanvas_simple();context_simple.strokeStyle="#f00",context_simple.lineJoin="round",context_simple.lineWidth=5;for(var e=0;e<clickX_simple.length;e++)context_simple.beginPath(),clickDrag_simple[e]&&e?context_simple.moveTo(clickX_simple[e-1],clickY_simple[e-1]):context_simple.moveTo(clickX_simple[e]-1,clickY_simple[e]),context_simple.lineTo(clickX_simple[e],clickY_simple[e]),context_simple.closePath(),context_simple.stroke()}executeArticleScript();

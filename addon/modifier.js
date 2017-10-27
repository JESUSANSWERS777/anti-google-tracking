/* 
 *	Made by Draphar
 *	Anti Google Tracking Addon
 *	Prevents google to redirect you to google.x/url and store your data
*/
const results=document.getElementsByClassName("rc");
for(var i=0;i<results.length;i++){
	let clone=results[i].parentElement.cloneNode(true);
	clone.setAttribute("cloned","true");
	results[i].parentElement.parentElement.replaceChild(clone,results[i].parentElement);
	let element=results[i].firstChild.firstChild;
	element.removeAttribute("onmousedown");
	element.target="_blank";
	element.outerHTML=element.outerHTML;
}
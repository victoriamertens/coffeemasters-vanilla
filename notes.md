# Frontend Masters: You don't need that library

### The DOM is NOT HTML

DOM is not HTML, DOM is what we see in elements tab of inspection
-DOM is structure in memory, head and body are implicit bc every page needs it for the DOM
-browser can add or subtract things
-SRC vs Inspect looks at html and DOM respectively

[ ] Read: https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work

Examples:

- document.querySelector('header') => selecting header from DOM, A SINGLE ELEMENT
  -NODE?

- let nav = document.querySelector("nav");
  nav.querySelector("span#badge");

\*These queries are on the DOM not HTML structure

App.js is the entry point to scripts like javascript
-performance of: <script src="App.js" defer></script>, when HTML finds script tag it will stop executing HTML and run the scripts before it moves on to the rest of the document - Old idea: put scripts at the bottom of the HTML document, but that is depricated - USE defer or async in the tag - defer will download the scripts in parallel to the processing of HTML and execute JS at end of HTML - window.addEventListener("DOMContentLoader") used in defer - async for scripts that need to be executed ASAP, EX: server fetches, etc.

### Event Binding:

Events = load, click, value change, keyboard events, mouse events, pointer and touch events., scroll and focus events, and MORE APIs (Drag and drop? , casting ), window events

#### Bind functions to events in DOM objects : onevent properties and addEventListener

    -onevent properties = element.onload = eventHandler AND element.onload = ()=>{}
    	ONLY getter OR setter, only one element fired => last one fires.
    - addEventListener = element.addEventListener("load", eventHandler); AND element.addEventListener("load", ()=>{})
    	- THESE WILL BOTH FIRE
    	- Can do more advance computing :
    		- `const options = { once: true, passive: true} window.addEventListener("load", eventHandler, options);`

_We can CREATE our own event:
const event = new Event("mycustomname");
element.dispatchEvent(event); _

### Services

### Router? Abstract idea in DOM, just removing and adding things to DOM

### Questions or Continued learning:

? Document versus Window ?

? DOM API vs Document version ?

Life Cycle of the Browser Load that are not a part of the DOM API, but other APIs the browser utilizes

ES Modules, how does that effect the environment with global versus local?
-no conflict with naming.

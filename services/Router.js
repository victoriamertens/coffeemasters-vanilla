const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();
        const url = a.href; //Is the property
        const url2 = a.getAttribute('href'); //Is the attribute
        const url3 = event.target.href; //Target of the event, property
        console.log('Link Clicked', url2);
      });
    });
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);
    if (addToHistory) {
      history.pushState({ route }, '', 'Whateverwewant' + route); //can pass scroll position, if we want to be tricky.
    }
    let pageElement = null;
    switch (route) {
      case '/':
        pageElement = document.createElement('h1'); //Creates an h1 that only exists in memory
        pageElement.textContent = 'Menu';
        break;
      case '/order':
        pageElement = document.createElement('h1'); //Creates an h1 that only exists in memory
        pageElement.textContent = 'Order';
        break;
    }
    const cache = document.querySelector('main');
    cache.children[0].remove();
    cache.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
    //This is important to do in single page applications, because of where you end up with router
  },
};

export default Router;

//This essentially puts a click listener on each of the anchors on the DOM
//THEN we prevent the default

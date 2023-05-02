const API = {
  url: '/data/menu.json',
  fetchMenu: async () => {
    const results = await fetch(API.url);
    await results.json();
    //.json() parses result of json
  },
};

//fetch API returns a promise, can use async await

export default API;

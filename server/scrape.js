const { JSDOM } = require('jsdom');
function jsdom(responseBody) {
  return new JSDOM(responseBody);
};

function nodeListToArray(nodeList) {
  return [].slice.call(nodeList);
}

function bodyData(body) {
  try {
    const bodyDOM = jsdom(body)
    const imageMeta = bodyDOM.window.document.head.querySelector('meta[property="og:image"]')
    return imageMeta ? imageMeta.content : ''
  } catch (e) {
    return null
  }
};

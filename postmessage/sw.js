this.addEventListener('message', function (event) {
  console.log(event.data); // this message is from page
  event.source.postMessage('this message is from sw.js, to page');
});
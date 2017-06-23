export default function links() {
  var links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') == "" || links[i].getAttribute('href') == "#") {
      links[i].setAttribute('href', "javascript:void()");
    }
  }
}

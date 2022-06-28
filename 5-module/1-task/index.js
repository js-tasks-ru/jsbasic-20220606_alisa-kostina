function hideSelf() {
  let btn = document.querySelector('button');
  btn.onclick = function(event) {
    btn.hidden = true;
  }
}

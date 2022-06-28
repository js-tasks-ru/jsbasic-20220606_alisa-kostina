function toggleText() {
  let btn = document.querySelector('button');
  let txt = document.getElementById('text');
  btn.onclick = function(event) {
    txt.hidden = !txt.hidden;
  }
}

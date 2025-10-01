console.log('hi'); // just a test


function hideJumbo() {
    // get current opacity value
  const hideJumbotron = document.getElementById('jumbo');
  const jumbotronStyle = window.getComputedStyle(hideJumbotron);
  const opacityVal = parseFloat(jumbotronStyle.opacity);
  console.log('the opacity is:', opacityVal);

  if (opacityVal == 0) {
    // fade in
    // jumbo
    hideJumbotron.classList.remove("opacity-0");
    hideJumbotron.classList.add('opacity-100');

  } else {
    // fade out
    hideJumbotron.classList.remove("opacity-100");
    hideJumbotron.classList.add("opacity-0");
    }
}

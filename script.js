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
const body = document.querySelector("body")
const bodyStyle = window.getComputedStyle(body)
const bodyWidth = parseInt

// function app(){
//   const main = document.getElementById("window")
//   main.innerHTML = `
//   <div id="window2" class="containerWindow d-flex align-items-center justify-content-center py-4">
//       <div class="w-50 h-100 bg-light rounded-4 ">
                    
//       </div>
//     </div>`
// }

function app(){
  
}


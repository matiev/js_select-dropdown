let select = document.querySelectorAll('select option');
let content = document.querySelector('.content__inner');
let contentItems = document.querySelectorAll('.content__item');
let cloneC = [...content.children];
// console.log(cloneC);

let c = '';

content.textContent = '';

contentItems.forEach((item, v) => {
  item.setAttribute('id', select[v].value)
});

window.addEventListener('DOMContentLoaded', sf);
window.addEventListener('change', sf);

function sf() {
  content.textContent = '';
  select.forEach(item => {
    
    if (item.selected) {
      let sei = item;      
      cloneC.forEach(item => {
        if (sei.value === item.getAttribute('id')) {
          content.append(item)
        }
      })
    }

  })
}
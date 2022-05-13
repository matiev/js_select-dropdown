let select = document.querySelector('select'),
		options = document.querySelectorAll('select option'),
    headerInner = document.querySelector('.header__inner'),
    headerInnerItems = document.querySelectorAll('.header__inner-item'),
    inner = [...headerInner.children];

headerInner.textContent = '';

window.addEventListener('DOMContentLoaded', sl);
select.addEventListener('change', sl);

function sl() {
	headerInner.textContent = '';
	options.forEach(item => {
  	if (item.selected) {
    	let iv = item.value;
      
      inner.forEach(item => {
      	if (iv === item.getAttribute('data-it')) {
        	headerInner.append(item)
        }
      })
      
    }
  })
}
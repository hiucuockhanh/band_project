var btns = document.querySelectorAll('.js-buy-ticket');
var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var close = document.querySelector('.modal-close');
var header = document.getElementById('header');
var menu = document.getElementById('mobile-menu');
var currentHeight = header.clientHeight;
var linkItems = document.querySelectorAll('#nav li a[href*="#"]');




for (var i = 0; i < linkItems.length; i++) {
  var linkItem = linkItems[i];
  linkItem.onclick = function (event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if(!isParentMenu) {
      header.style.height = null;
    } else {
      event.preventDefault();
    }
  }
}

menu.onclick = function() {
  var isClose = header.clientHeight === currentHeight;
  if (isClose) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
};

function showBtn() {
  modal.classList.add('open');
}

function closeBtn() {
  modal.classList.remove('open');
}

function blockHoisting(event) {
  event.stopPropagation();
}

close.addEventListener('click', closeBtn);
modal.addEventListener('click', closeBtn);
modalContainer.addEventListener('click', blockHoisting)

for(var btn of btns) {
  btn.addEventListener('click', showBtn);
}

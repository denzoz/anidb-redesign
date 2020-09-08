const sidebar = document.querySelector('#sidebar');

function navExpand() {
    sidebar.style.cssText = 'animation-name: sidebarAnimation; animation-duration: 0.5s;';
}

function navCollapse() {
    sidebar.style.cssText = 'animation-direction: reverse; animation-duration: 0.5s;';
}

sidebar.addEventListener('onmouseover', navExpand());
sidebar.addEventListener('onmouseout', navCollapse());


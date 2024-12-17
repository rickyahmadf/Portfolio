const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
});

// // membuat loading
// onload = function () {
//   let id = document.getElementById('app');
//   let loading = document.createElement('div');

//   // fill the content
//   loading.textContent = 'Loading...';
//   loading.style.fontSize = '28px';
//   loading.style.fontWeight = 'bold';
//   loading.style.backgroundColor = 'white';
//   loading.style.width = '100vw';
//   loading.style.height = '100vh';
//   loading.style.position = 'fixed';
//   loading.style.zIndex = '9999';
//   loading.style.justifyContent = 'center';
//   loading.style.display = 'flex';
//   loading.style.alignItems = 'center';
//   id.appendChild(loading);

//   setTimeout(() => {
//     loading.textContent = 'BILANG STOP DONGGG!!!';
//     loading.style.fontSize = '28px';
//     loading.style.fontWeight = 'bold';
//     loading.style.backgroundColor = 'white';
//     loading.style.width = '100vw';
//     loading.style.height = '100vh';
//     loading.style.position = 'fixed';
//     loading.style.zIndex = '9999';
//     loading.style.justifyContent = 'center';
//     loading.style.display = 'flex';
//     loading.style.alignItems = 'center';
//   }, 3000);

//   setTimeout(() => {
//     id.style.display = 'none';
//   }, 5000);
// };

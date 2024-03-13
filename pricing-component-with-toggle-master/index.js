var annuallyButton = document.getElementById('annuallyButton');
var monthlyButton = document.getElementById('monthlyButton');
var basicPrice = document.getElementById('basicPrice');
var proPrice = document.getElementById('proPrice');
var masterPrice = document.getElementById('masterPrice');

annuallyButton.addEventListener('click', function () {
    annuallyButton.style.display = 'none';
    monthlyButton.style.display = 'block';
    monthlyButton.style.display = 'flex';

    basicPrice.getElementsByTagName('h1')[0].innerText = '$19.99';
    proPrice.getElementsByTagName('h1')[0].innerText = '$24.99';
    masterPrice.getElementsByTagName('h1')[0].innerText = '$39.99';
});

monthlyButton.addEventListener('click', function () {
    annuallyButton.style.display = 'block';
    monthlyButton.style.display = 'none';

    basicPrice.getElementsByTagName('h1')[0].innerText = '$199.99';
    proPrice.getElementsByTagName('h1')[0].innerText = '$249.99';
    masterPrice.getElementsByTagName('h1')[0].innerText = '$399.99';
});

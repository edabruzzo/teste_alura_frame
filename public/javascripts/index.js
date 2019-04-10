var campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade')
];

console.log(campos);

var table = document.querySelector('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);


document.querySelector('.form').addEventListener('submit', function (event) {

  
   event.preventDefault();


  var tr = document.createElement('tr');
  campos.forEach(function (campo) {

    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);

  });


  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  console.log(tbody);
  console.log(table);


  campos[0].value = '2019-04-08'
  campos[2].value = 1;
  campos[1].value = 100;

  campos[0].focus();


});


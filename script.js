function showAlert() {
    alert ("Hello!!! this is the Simple Calculator");
  }
  function Result() {
     var num1 = document.getElementById('res').value;
     var num2 = eval(num1);
     document.getElementById('res').value = num2;
  }
  function Clear() {
     var inp = document.getElementById('res');
     inp.value = '';
  }
  function Back() {
     var ev = document.getElementById('res');
     ev.value = ev.value.slice(0,-1);
  }
  function Solve(value) {
      var inputField = document.getElementById('res');
      inputField.value += value;
  }

  showAlert()
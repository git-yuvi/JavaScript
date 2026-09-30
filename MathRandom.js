//Javascript Mathrandom
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Math</h1>
<h2>The Math.random() Method</h2>

<p>Every time you click the button, getRndInteger(1, 10) returns a random number between 1 and 10 (both included):</p>

<button onclick="document.getElementById('demo').innerHTML = getRndInteger(1,10)">Click Me</button>

<p id="demo"></p>

<script>
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
</script>

</body><!DOCTYPE html>
<html>
<body>
<h1>JavaScript Math</h1>
<h2>The Math.random() Method</h2>

<p>Every time you click the button, getRndInteger(1, 10) returns a random number between 1 and 10 (both included):</p>

<button onclick="document.getElementById('demo').innerHTML = getRndInteger(1,10)">Click Me</button>

<p id="demo"></p>

<script>
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
</script>

</body>
</html>

</html>

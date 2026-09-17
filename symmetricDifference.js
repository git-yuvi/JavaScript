//JavaScript Symmetric Difference in sets
<html>
<body>
<h1>JavaScript Sets</h1>
<h2>The symmetricDifference() Method</h2>

<p>The symmetricDifference() method returns a new set containing elements which are in this set or in the argument set, but not in both:</p>
<p id="demo"></p>

<script>
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.symmetricDifference(B);

let text = "";
for (const x of C) {
  text += x;
}
document.getElementById("demo").innerHTML = "The symmetric difference is: " + text;
</script>
</body>
</html>

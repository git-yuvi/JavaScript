//JavaScript sets
<html>
<body>
<h1>JavaScript Sets</h1>
<h2>The add() Method</h2>

<p>The add() method adds values to a Set:</p>

<p id="demo"></p>

<script>
// Create a Set
const letters = new Set();

// Add values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

// Display set.size
document.getElementById("demo").innerHTML = "The set has " + letters.size + " values.";
</script>

</body>
</html>

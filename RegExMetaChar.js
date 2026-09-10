// JavaScript RegexMetaCharacters

<!DOCTYPE html>
<html>
<body>
<h1>Regular Expressions</h1>
<h2>The \xhh Metacharacters</h2>

<p>A global replace of the hexadecimal character 6F (o):</p>

<p id="demo"></p>

<script>
let text = "Hi! Im Max.. How may i help you? "; 
let pattern = /\x6F/g;

let result = text.replace(pattern, "*");

document.getElementById("demo").innerHTML = result;
</script>

</body>
</html>

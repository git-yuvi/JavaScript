//JavaScript encodeURI()method encodes a URI
<html>
<body>

<h1>JavaScript Global Methods</h1>
<h2>The encodeURI() Method</h2>

<p id="demo"></p>

<script>
let uri = "my test.asp?name=ståle&car=saab";
let encoded = encodeURI(uri);

document.getElementById("demo").innerHTML = encoded;
</script>

</body>
</html>
  

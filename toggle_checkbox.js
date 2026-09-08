//JavaScript ToggleCheckbox
<!DOCTYPE html>
<html>
<head>
    <title>Animal List</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        ul {
            list-style-type: none;
            padding: 0;
        }
        .hidden{
            display: none;
        }
    </style>
</head>
<body>
    <div class="container" style="margin-top: 10%;">

        
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header" style="background-color: rgb(20, 195, 226);">
                        <h3 class="card-title" style="color:whitesmoke ;">Animal Names</h3>
                    </div>
                    <div class="card-body">
                        <ul id="animalList" style="font-weight: bold;">
                            <li><input type="checkbox" value="Lion" onchange="toggleList('Lion')"> Lion</li>
                            <li><input type="checkbox" value="Tiger" onchange="toggleList('Tiger')"> Tiger</li>
                            <li><input type="checkbox" value="Bear" onchange="toggleList('Bear')"> Bear</li>
                            <li><input type="checkbox" value="Elephant" onchange="toggleList('Elephant')"> Elephant</li>
                            <li><input type="checkbox" value="Giraffe" onchange="toggleList('Giraffe')"> Giraffe</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header" style="background-color: rgb(20, 195, 226);">
                        <h3 class="card-title" style="color:whitesmoke ;">Selected Animals</h3>
                    </div>
                    <div class="card-body">
                        <ul id="selectedList" style="font-weight: bold;">
                            <li>Lion</li>
                            <li>Tiger</li>
                            <li>Bear</li>
                            <li>Elephant</li>
                            <li>Giraffe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script>
        function toggleList(animalName) {
            const selectedListItems = document.querySelectorAll("#selectedList li");
            
            for (const item of selectedListItems) {
                if (item.textContent.trim() === animalName) {
                    item.classList.toggle("hidden");
                    break;
                }
            }
        }
    </script>
</body>
</html>

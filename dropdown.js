//JavaScript Dropdown 
<!DOCTYPE html>
<html>
<head>
    <title>Simple Dropdown with Search and Selection (Bootstrap 3)</title>
    <!-- Include Bootstrap 3 CSS and JavaScript -->
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    
    <script>
        $(document).ready(function(){
            $("#search-input").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#dropdown-menu a").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });

            $("#dropdown-menu a").click(function() {
                var selectedItemID = $(this).attr("id");
                $("#selected-item").text(selectedItemID);
            });
        });
    </script>
    <style>
   .centered-dropdown {
            text-align: center;
        }

        .dropdown-menu {
            width: auto;
            min-width: 100%;
            text-align: left;
        }
        
        .search-input {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: none;
            border-bottom: 1px solid #ddd;
        }

        #selected-item {
            padding: 10px;
        }
        h6{
            color: blue;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bold;
        }
        h3{
            color: rgb(20, 195, 226);
            font-weight: bold; 
            font-size:xx-large; 
            text-align: right;

        }
        #selected-item{
            font-weight: bold;
             font-size: large;
             color: red;

        }
    </style>
</head>
<body>


    <div class="container" style="margin-top: 10%;">

        
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Animal Names</h3>
                    </div>
                    <div class="card-body">

                        <div class="container centered-dropdown">
                            <div class="dropdown">
                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select<span id="selected-item">None</span>
                                <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <input id="search-input" type="text" class="search-input" placeholder="Search...">
                                    </li>
                                    <li id="dropdown-menu">
                                        <a href="#" id="Lion">Lion<h6>Description: King of the Forest</h6></a>
                                        <a href="#" id="Tiger">Tiger<h6>Description: Strongest Animal in the Forest</h6></a>
                                        <a href="#" id="Bear">Bear<h6>Always search Mougli</h6></a>
                                        <a href="#" id="Elephant">Elephant<h6>Always Hungry and Eating lot</h6></a>
                                        <a href="#" id="Giraffe">Giraffe<h6>tallest Animal in the Forest</h6></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>


</body>
</html>

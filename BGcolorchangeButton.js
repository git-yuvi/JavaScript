//JavaScript Background Colour Changer

https://codepen.io/javascriptacademy-stash/pen/oNeNMNR

https://images.ctfassets.net/lh3zuq09vnm2/6FdHOZHJKvrlc1dAWXdqlu/2e83c3b20cb1af6f42d99b4b8439d5eb/05_Shopify.jpg


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopify</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <style>
        /* Custom CSS to remove background color */
        .navbar.bg-body-tertiary {
            background-color: transparent !important;
        }
        img{
            position: fixed;

        }
        .image-container {
    width: 55%;
    float: right; /* This ensures the image stays on the left side */
}
.image-container img {
    margin-top: 5%;
    max-width: 100%; /* Ensure the image doesn't exceed its container's width */
}
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li class="nav-item dropdown">
                <a style="color: black; padding-right: 50px; " class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Start </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a style="color: black; padding-right: 50px;"   class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Sell</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

                <li class="nav-item dropdown">
                    <a style="color: black; padding-right: 50px;" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Market </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a style="color: black;" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Manage</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
            </ul>
            <form class="d-flex" role="search">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a  style=" padding-right: 50px;" class="nav-link active" aria-current="page" href="#">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a style="color: black; padding-right: 50px;" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Learn</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    <li class="nav-item">
                      <a  style=" padding-right: 50px;" class="nav-link" href="#">Log in</a>
                    </li>
                    <li>    <button  class="btn btn-success" type="submit">Strat Free Trial</button> </li>
                    <li>  <a  style=" padding-right: 50px;"></a> </li>
                  </ul>
              <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
              
            </form>
          </div>
        </div>
      </nav>
      <div class="image-container">
        <img src="abd.png" alt="Your Image">
    </div>


      <!-- <div class="image-container">
        <div class="row">
          <div class="col-sm-4">col-sm-8</div>
          <div class="col-sm-8">
            <img src="abb.png">
          </div>
        </div> -->




    <!-- <div class="dropdown">
        <button style="border: none;"   class="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div> -->
</body>
</html>


/* Reset default margin and padding */
body, ul {
    margin: 0;
    padding: 0;
}

/* Style the menu bar */
.menu-bar {
    background-color: #333; /* Change the background color as needed */
    overflow: hidden;
}

.menu-bar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu-bar li {
    display: inline;
    margin-right: 20px; /* Adjust the spacing between menu items */
}

.menu-bar a {
    text-decoration: none;
    color: white; /* Change the text color as needed */
    font-weight: bold; /* Optionally, make the text bold */
}

.menu-bar a:hover {
    text-decoration: underline; /* Add underline on hover (optional) */
}


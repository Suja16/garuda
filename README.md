#HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="garuda.css">
    <title>Login & Signup</title>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="login-card">
                <h2>Login</h2>
                <form action="#">
                    <input type="text" placeholder="Username" required>
                    <input type="password" placeholder="Password" required>
                    <button class="login-button">Login</button>
                </form>
                <p class="not-a-user-text">Not a user? <a href="SIGNUP.html">Sign up here</a></p>
            </div>
        </div>
    </div>
</body>
</html>


#CSS CODE

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f1f1f1; /* Background color for the entire page */
}

.container {
    perspective: 1000px;
}

.card {
    width: 300px;
    height: 400px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}

.card-inner {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}

.card.flip {
    transform: rotateY(180deg); /* Rotate to signup side when flipped */
}

h2 {
    text-align: center;
}

form {
    padding: 20px;
    display: flex;
    flex-direction: column;
}

input {
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: transparent;
}

.login-button,
.signup-button {
    background-color: #805605; /* Button background color */
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s; /* Add hover transition */
}

.login-button:hover,
.signup-button:hover {
    background-color: #684804; /* Darker background color on hover */
}

.login-card,
.signup-card {
    background-color: white; /* Background color for the cards */
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.not-a-user-text {
    text-align: center;
    color: gray; /* Text color for "Not a user?" */
    cursor: pointer;
}

.not-a-user-text a {
    text-decoration: none;
    color: #805605; /* Link color for "Sign up here" */
    cursor: pointer;
}


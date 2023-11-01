import React, { useState, useRef } from "react";
import { TextField, Button, Container, Stack, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "context/auth/AuthProvider";
import { AuthProvider } from "context/auth/AuthProvider";
import { signIn } from "config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const { login, currentUser } = useAuth()
    const navigate = useNavigate()
    /* alert("Use Following TEST credentials: \n username: hello@admin.com \n Password: 123456")*/
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            navigate("/dashboard")
        } catch (err) {
            setError("Failed to Login")
            console.log(err.message);
            alert(err.message);
        }
        setLoading(false)

    }

    return (
        <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", minHeight: "100vh",background:"white" }}>
            <AuthProvider>
                <React.Fragment>
                    <div style={{ textAlign: "center" }}>
                        <h2>Login</h2>
                        <h2>Test credentials:</h2>
                        <h2>Email: hello@admin.com, Password: 123456</h2>
                        {/* {currentUser && currentUser.email} */}
                        {error && <Alert severity="error">{error}</Alert>}
                    </div>
                    <form onSubmit={handleSubmit}>

                        <TextField
                            type="email"
                            variant="outlined"
                            color="secondary"
                            label="Email"
                            size="small" // Set input size to smaller
                            inputRef={emailRef}
                            fullWidth
                            required
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            type="password"
                            variant="outlined"
                            color="secondary"
                            label="Password"
                            size="small" // Set input size to smaller
                            inputRef={passwordRef}
                            fullWidth
                            required
                            sx={{ marginBottom: 2 }}
                        />

                        <Button
                            disabled={loading}
                            variant="contained" // Change to contained style
                            style={{ backgroundColor: '#007bff', color: '#fff', textAlign: "center" }}
                            type="submit"
                            sx={{ marginTop: 2 }}
                        >
                            Log In
                        </Button>
                    </form>
                    <div style={{ textAlign: "center", marginTop: 2 }}>
                        <small>Need an account? <Link to="/register">Register Here</Link></small>
                    </div>
                </React.Fragment>
            </AuthProvider>
        </div>
    );
}

export default Login;

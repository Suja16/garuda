import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const { login, currentUser } = useAuth()
    const history = useNavigate()
}
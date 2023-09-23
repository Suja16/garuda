from flask import Flask, render_template, request, redirect, url_for, session
import firebase_admin
from firebase_admin import credentials,auth

app=Flask(__name__)
app.secret_key='your_secret_key'
cred= {
    "apiKey": "AIzaSyASIRNx3iGnmd7zjudfwJFqJe70IHt9_jM",
    "authDomain": "flask-sih.firebaseapp.com",
    "projectId": "flask-sih",
    "storageBucket": "flask-sih.appspot.com",
    "messagingSenderId": "326318439623",
    "appId": "1:326318439623:web:8cf713bafad6e52b5b92e2",
    "measurementId": "G-WY6ZBZ3GDR"
}
  
firebase_admin.initialize_app(cred)

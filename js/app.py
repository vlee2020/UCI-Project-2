#flask file
from flask import Flask, jsonify
import numpy as np
import sqlalchemy
import pandas as pd
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from datetime import datetime, timedelta
from itertools import chain
import psycopg2
#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################
# Connection to PostgreSQL server
rds_connection_string = "postgres:postgres@localhost:5432/pokemon.db"
engine = create_engine(f"postgresql://{rds_connection_string}")
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return ("Welcome to our Pokemon API<br/>"
    f"/type<br/>"
    f"/starters<br/>"
    f"/legendaries<br/>")
@app.route("/type")
def types():
    print("")
    return ""
@app.route("/starters")
def starters():
    print("")
    return ""
@app.route("/legendaries")
def legendaries():
    print("")
    return ""
app.run(debug=True)

#testing saves

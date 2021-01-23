#flask file
from flask import Flask, render_template, redirect, jsonify
import json
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
# @app.route("/")
# def home():
#     print("Server received request for 'Home' page...")
#     return ("Welcome to our Pokemon API<br/>"
#     f"/type<br/>"
#     f"/starters<br/>"
#     f"/legendaries<br/>")

# @app.route("/type")
# def types():
#     print("")
#     return ""

# @app.route("/starters")
# def starters():
#     print("")
#     return ""

# @app.route("/legendaries")
# def legendaries():
#     print("")
#     return ""

@app.route("/")
def homepage():
    return render_template('index.html')

@app.route("/aboutus")
def aboutus():
    return render_template('aboutus.html')

@app.route("/bulbasaur")
def bulbasaur():
    return render_template('bulbasaur.html')

@app.route("/chart1")
def chart1():
    return render_template('chart1.html')

@app.route("/chart2")
def chart2():
    return render_template('chart2.html')

@app.route("/chart3")
def chart3():
    return render_template('chart3.html')

@app.route("/getstarted")
def getstarted():
    return render_template('getstarted.html')

@app.route("/pokemongo")
def pokemongo():
    return render_template('pokemongo.html')

@app.route("/privacy")
def privacy():
    return render_template('privacy.html')

@app.route("/team")
def team():
    return render_template('team.html')

@app.route("/terms")
def terms():
    return render_template('terms.html')


# Data for Daniel's Scatter Chart
@app.route("/data/pokemon_data")
def pokemon_data():
    data = pd.read_sql("select * from pokemon_data;", con=engine).to_json(index=False,orient="table")
    pokemon_data = json.loads(data)

    return jsonify(pokemon_data['data'])

# Data for Vanessa's Heatmap
@app.route("/data/type_data")
def type_data():
    data = pd.read_sql("select * from type_data;", con=engine).to_json(index=False,orient="table")
    type_data = json.loads(data)

    return jsonify(type_data['data'])

# Data for Seraphin's bar chart  (Seraphin to update as needed)
@app.route("/data/starter_data")
def starter_data():
    data = pd.read_sql("select * from starter_data;", con=engine).to_json(index=False,orient="table")
    starter_data = json.loads(data)

    return jsonify(starter_data['data'])

    
app.run(debug=True)


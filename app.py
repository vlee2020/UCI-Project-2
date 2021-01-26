#flask file
from flask import Flask, render_template, redirect, jsonify
from flask_cors import CORS
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
CORS(app)

#################################################
# Flask Routes

#################################################
# Connection to PostgreSQL server
rds_connection_string = "postgres:1234@localhost:5432/pokemon.db"
engine = create_engine(f"postgresql://{rds_connection_string}")

@app.route("/")
def homepage():
    return render_template('home.html')

@app.route("/index.html")
def homepage2():
    return render_template('index.html')

@app.route("/aboutus.html")
def aboutus():
    return render_template('aboutus.html')

@app.route("/bulbasaur.html")
def bulbasaur():
    return render_template('bulbasaur.html')

@app.route("/chart1.html")
def chart1():
    return render_template('chart1.html')

@app.route("/chart2.html")
def chart2():
    return render_template('chart2.html')

@app.route("/chart3.html")
def chart3():
    return render_template('chart3.html')

@app.route("/getstarted")
def getstarted():
    return render_template('getstarted.html')

@app.route("/pokemongo.html")
def pokemongo():
    return render_template('pokemongo.html')

@app.route("/privacy.html")
def privacy():
    return render_template('privacy.html')

@app.route("/team.html")
def team():
    return render_template('team.html')

@app.route("/terms.html")
def terms():
    return render_template('terms.html')


# Data for Daniel's Scatter Chart
@app.route("/data/pokemon_data")
def pokemon_data():
    data = pd.read_sql("select * from pokemon_data;", con=engine).to_json(index=False,orient="table")
    pokemon_data = json.loads(data)

    return jsonify(pokemon_data['data'])

# # Data for Vanessa's Heatmap
@app.route("/data/type_data")
def type_data():
    data = pd.read_sql("select * from effectiveness_by_type_data;", con=engine).to_json(index=False,orient="table")
    effectiveness_by_type_data = json.loads(data)

    return jsonify(effectiveness_by_type_data['data'])

# Data for Serafin's bar chart  (Seraphin to update as needed)
@app.route("/data/starter_data")
def starter_data():
    data = pd.read_sql("select * from starter_data;", con=engine).to_json(index=False,orient="table")
    starter_data = json.loads(data)

    return jsonify(starter_data['data'])

    
app.run(debug=True)


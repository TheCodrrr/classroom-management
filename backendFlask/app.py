from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from db import get_db_connection

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests from React

@app.route('/api/')
def home():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        # Check and create the database if it doesn't exist
        cursor.execute('SHOW DATABASES')
        databases = [db['Database'] for db in cursor.fetchall()]

        if 'classroom_management' not in databases:
            cursor.execute('CREATE DATABASE classroom_management')

        cursor.execute('USE classroom_management')

        # Check and create the user_login table if it doesn't exist
        cursor.execute('SHOW TABLES')
        tables = [tbl['Tables_in_classroom_management'] for tbl in cursor.fetchall()]

        if 'user_login' not in tables:
            cursor.execute('''
                CREATE TABLE user_login (
                    user_id INT(20) AUTO_INCREMENT PRIMARY KEY,
                    password VARCHAR(100),
                    email VARCHAR(500),
                    name VARCHAR(100),
                    designation_type TINYINT(1)
                )
            ''')

        cursor.close()
        conn.close()

        return jsonify({"message": "Check successful"}), 200

    except mysql.connector.Error as err:
        print(f"Database error: {err}")
        return jsonify({"message": "Database error occurred"}), 500

@app.route('/api/login', methods=['POST'])
def get_login_data():
    try:
        data = request.get_json()

        # Extract username (or email) and password from the JSON request body
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({"message": "Email and password are required"}), 400

        # Connect to the database
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('USE classroom_management')

        # Use parameterized queries to prevent SQL injection
        cursor.execute('SELECT * FROM user_login WHERE email = %s', (email,))
        user = cursor.fetchone()

        if user:
            # Check if the provided password matches the one in the database
            if user['password'] == password:
                return jsonify({"message": "Login successful", "user": user}), 200
            else:
                return jsonify({"message": "Invalid password"}), 401
        else:
            return jsonify({"message": "User not found"}), 404

    except mysql.connector.Error as err:
        print(f"Database error: {err}")
        return jsonify({"message": "Database error occurred"}), 500

    finally:
        cursor.close()
        conn.close()


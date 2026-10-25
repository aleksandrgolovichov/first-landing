from app import app
from flask import render_template
from app.forms import DescribeForm




@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route('/form', methods=['GET', 'POST'])
def form():
    form = DescribeForm()
    return render_template("form.html", form=form)

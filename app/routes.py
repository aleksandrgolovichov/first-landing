from app import app
from flask import render_template, redirect, url_for, flash
from app.forms import DescribeForm
from app.models import DescribeForm as ProjectModel  # импорт модели базы данных
from app import db


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route('/form', methods=['GET', 'POST'])
def form():
    form = DescribeForm()
    if form.validate_on_submit():
        # Создаем запись для базы данных на основе данных из формы
        project = ProjectModel(
            username=form.username.data,
            email=form.email.data,
            project_type=form.project_type.data,
            body=form.body.data
        )
        db.session.add(project)
        db.session.commit()

        flash('Your project description has been saved successfully!', 'success')
        return redirect(url_for('index'))

    return render_template("form.html", form=form)



@app.route('/admin/requests')
def admin_requests():
    requests_list = ProjectModel.query.all()
    return render_template('admin.html', requests=requests_list)
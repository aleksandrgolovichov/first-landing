from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField, SubmitField
from wtforms.validators import DataRequired

class DescribeForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired()])
    project_type = SelectField('Project Type', choices=[
        ('landing', 'Landing page'),
        ('web', 'Web-application'),
        ('corporate', 'Corporate site'),
        ('mobile', 'Mobile application')
    ], validators=[DataRequired()])
    body = TextAreaField('Describe project', validators=[DataRequired()])
    submit = SubmitField('Send')
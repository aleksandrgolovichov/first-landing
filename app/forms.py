from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, EqualTo, ValidationError
from app import db
# from app.models import User
# from app.models import User
import sqlalchemy as sa

class DescribeForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired()])
    body = TextAreaField('Describe project', validators=[DataRequired()])
    submit = SubmitField('Send')
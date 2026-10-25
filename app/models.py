# from datetime import datetime,timezone
# from typing import Optional
import flask_sqlalchemy as sa
import sqlalchemy.orm as so
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin
# from app import login
from app import db
# from hashlib import md5

class DescribeForm(db.Model):
    id: so.Mapped[int] = db.Column(db.Integer, primary_key=True)
    username: so.Mapped[str] = db.Column(db.String(64), index=True, unique=True)
    email: so.Mapped[str] = db.Column(db.String(120), index=True, unique=True)
    body: so.Mapped[str] = so.mapped_column(db.String(140))

    # def repr(self):
    #     return f'<!Post {self.body}>'

    # def __repr__(self):
    #     return f'<!Contact {self.username}>'

    def __str__(self):
        return self.username
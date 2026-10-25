from app import app,db
from app.models import DescribeForm

with app.app_context():
    db.create_all()
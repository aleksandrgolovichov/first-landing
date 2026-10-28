from app import db
import sqlalchemy.orm as so

class DescribeForm(db.Model):
    id: so.Mapped[int] = db.Column(db.Integer, primary_key=True)
    username: so.Mapped[str] = db.Column(db.String(64), index=True)
    email: so.Mapped[str] = db.Column(db.String(120), index=True)
    project_type: so.Mapped[str] = db.Column(db.String(64), index=True)  # Новое поле для типа проекта
    body: so.Mapped[str] = so.mapped_column(db.Text)  # Заменили на Text, чтобы текст описания не был ограничен 140 символами

    def __str__(self):
        return self.username
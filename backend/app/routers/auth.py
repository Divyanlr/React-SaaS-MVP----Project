from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from pathlib import Path
import json

router = APIRouter()

DB_FILE = Path("users.json")

class AuthRequest(BaseModel):
    email: str
    password: str


def load_users():
    if not DB_FILE.exists():
        DB_FILE.write_text("{}")
    return json.loads(DB_FILE.read_text())


def save_users(users):
    DB_FILE.write_text(json.dumps(users))


@router.post("/register")
def register_user(data: AuthRequest):
    users = load_users()

    if data.email in users:
        raise HTTPException(status_code=400, detail="User already exists")

    users[data.email] = {
        "password": data.password
    }

    save_users(users)
    return {"message": "User registered successfully"}


@router.post("/login")
def login_user(data: AuthRequest):
    users = load_users()
    user = users.get(data.email)

    if not user or user["password"] != data.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {
        "token": "fake-jwt-token",
        "email": data.email
    }

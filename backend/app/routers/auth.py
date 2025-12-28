from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()

# In memory user store (MVP purpose)
fake_users_db = {}


class AuthRequest(BaseModel):
    email: EmailStr
    password: str


@router.post("/register")
def register_user(data: AuthRequest):
    if data.email in fake_users_db:
        raise HTTPException(status_code=400, detail="User already exists")

    fake_users_db[data.email] = {"email": data.email, "password": data.password}

    return {"message": "User registered successfully"}


@router.post("/login")
def login_user(data: AuthRequest):
    user = fake_users_db.get(data.email)

    if not user or user["password"] != data.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"token": "fake-jwt-token", "email": user["email"]}


@router.delete("/delete/{email}")
def delete_user(email: str):
    if email not in fake_users_db:
        raise HTTPException(status_code=404, detail="User not found")

    del fake_users_db[email]
    return {"message": "User account deleted successfully"}

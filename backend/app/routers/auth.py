from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()

class AuthRequest(BaseModel):
    email: EmailStr
    password: str

@router.post("/register")
def register_user(data: AuthRequest):
    return {"message": "User registered successfully"}

@router.post("/login")
def login_user(data: AuthRequest):
    if data.password != "password123":
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"token": "fake-jwt-token"}

from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class RegisterRequest(BaseModel):
    email: EmailStr
    password: str

@app.post("/register")
def register_user(payload: RegisterRequest):
    return {"status": "ok"}

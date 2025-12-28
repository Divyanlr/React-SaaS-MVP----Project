from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register auth routes
app.include_router(auth.router, prefix="/auth")

@app.get("/")
def root():
    return {"status": "Backend running"}

import importlib
import traceback
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# try both package and script import paths and show errors
auth = None
for mod_name in ("app.routers.auth", "routers.auth"):
    try:
        auth = importlib.import_module(mod_name)
        print(f"Imported auth from: {mod_name}")
        break
    except Exception:
        traceback.print_exc()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if auth and hasattr(auth, "router"):
    app.include_router(auth.router, prefix="/auth", tags=["Auth"])
    print("Auth router included")
else:
    print("Auth router NOT included (module missing or no 'router')")

# show registered routes for debugging
print("Registered routes:")
for r in app.routes:
    try:
        print(r.path, getattr(r, "methods", None))
    except Exception:
        print("route:", r)

@app.get("/")
def health_check_root():
    return {"status": "ok"}

# add explicit /health endpoint so http://.../health works
@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/auth")
def auth_root():
    routes = sorted({r.path for r in app.routes if r.path.startswith("/auth")})
    return {"auth_routes": routes}

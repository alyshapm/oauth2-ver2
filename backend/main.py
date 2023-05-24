from fastapi import Body, Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import Dict

from backend.database import get_db, engine
from backend.models import users as user_model
from backend.schemas.users import CreateUserSchema, UserSchema, UserLoginSchema
from backend.services import users as user_db_services

user_model.Base.metadata.create_all(bind=engine)


# authentication scheme setup
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

app = FastAPI()

# authentication processes
@app.get("/profile/{id}", response_model=UserSchema)
def profile(
    id:int,
    token: str = Depends(oauth2_scheme),
    session: Session= Depends(get_db)
):
    
    """Processes request to retrieve user
    profile by id
    """
    return user_db_services.get_user_by_id(session=session, id=id)

@app.post('/signup', response_model=UserSchema)
def signup(
    payload: CreateUserSchema = Body(), 
    session:Session=Depends(get_db)
):
    """Processes request to register user account."""

    payload.hashed_password = user_model.User.hash_password(payload.hashed_password)
    return user_db_services.create_user(session, user=payload)

@app.post('/login', response_model=Dict)
def login(
        payload: OAuth2PasswordRequestForm = Depends(),
        session: Session = Depends(get_db)
    ):
    """Processes user's authentication and returns a token
    on successful authentication.

    request body:

    - username: Unique identifier for a user e.g email, 
                phone number, name

    - password:
    """
    try:
        user:user_model.User = user_db_services.get_user(
            session=session, email=payload.username
        )
    except:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid user credentials"
        )

    is_validated:bool = user.validate_password(payload.password)
    if not is_validated:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid user credentials"
        )

    return user.generate_token()

@app.delete("/delete-user/{user_id}", response_model=UserSchema)
def delete_user(
    id:int,
    token: str = Depends(oauth2_scheme),
    session: Session= Depends(get_db)
):
    return user_db_services.delete_user(session=session, id=id)
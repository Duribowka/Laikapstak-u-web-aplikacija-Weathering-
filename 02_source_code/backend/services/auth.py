import bcrypt

from database import get_connection

def signup(username, password):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
    """
    SELECT username
    FROM users
    WHERE username = %s
    """,
    (username,)
    )

    row = cursor.fetchone()

    if row is not None:
        return {
            "success": False,
            "message": "Username already exists."
        }

    password_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    password_hash = password_hash.decode()

    cursor.execute(
    """
    INSERT INTO users
    (username, password_hash)
    VALUES (%s, %s)
    """,
    (username, password_hash)
    )

    connection.commit()

    return {"message": "Account created"}


def signin(username, password):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
    """
    SELECT password_hash
    FROM users
    WHERE username = %s
    """,
    (username,)
    )

    row = cursor.fetchone()

    if row is None:
        return{
            "success": False,
            "message": "User does not exist.."
        }
    
    password_hash = row[0]

    if bcrypt.checkpw(password.encode(), password_hash.encode()):
        return{
            "success": True,
            "message": "Logged in."
        }
    return{
        "success": False,
        "message": "Logging failed, wrong username or password.."
    }
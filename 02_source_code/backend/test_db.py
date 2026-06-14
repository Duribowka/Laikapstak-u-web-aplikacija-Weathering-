import psycopg2

try:
    connection = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="practice_project",
        user="student",
        password="student_password"
    )

    print("SUCCESS")

except Exception as error:
    print(error)
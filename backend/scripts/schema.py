import json

from app.main import app

if __name__ == "__main__":
    schema = app.openapi()
    with open("openapi.json", "w") as f:
        json.dump(schema, f, indent=2)
    print("OpenAPI schema has been dumped to openapi.json")

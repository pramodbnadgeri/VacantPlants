const liustUser = {
    "tags": [
        "Users"
    ],
    "description": "list all of the users",
    "summary": "to get list of summary",
    "responses": {
        "200": {
            "description": "ok",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "example": {
                            "count": 0,
                            "user": "[]"
                        }
                    }
                }
            }
        }
    }
}

const userRouteDoc = {
    "/users": {
        "get": "liustUser",
    },
};

module.exports = userRouteDoc;
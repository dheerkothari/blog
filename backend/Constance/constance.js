const http_code = {
    ok: 200,
    dataNotFound: 404,
    internalServerError: 500,
    badRequest: 400,
    unAuthorized: 401,
    forbidden: 403
};

const MESSAGES = {
    addUser: "user added successfully"
}

const constance = {
    code: http_code,
    message: MESSAGES
}

export default constance;
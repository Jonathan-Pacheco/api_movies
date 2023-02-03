class AppError {
    message;
    statusCode;

//statusCode 400 = bad request pra avisar que algo deu errado 
    constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
    }
}

module.exports = AppError;
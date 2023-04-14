class ApiError extends Error {
    contructor(statusCode, message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;
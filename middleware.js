module.exports = function (err, req, res, next) {

    let errorData = {
        "code": err.code,
        "key": err.key,
        "message": err.message,
        "context": err.context,
    };
    if (err.isTest === true) {
        errorData['trace'] =  err.stack.split("\n");
    }

    res.status(500).json(errorData);
};
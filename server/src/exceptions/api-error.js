module.exports = class ApiError extends Error {
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    this.message = message;
    this.errors = errors;
  }
  static BadRequest(message, errors) {
    return new ApiError(400, message, errors);
  }
  static Internal(message, errors) {
    return new ApiError(500, message || "internal", errors);
  }
  static Forbidden(message, errors) {
    return new ApiError(403, message || "forbidden", errors);
  }
};

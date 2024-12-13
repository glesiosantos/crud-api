export default class AppError {
    constructor(readonly message: string, readonly statusCode: number = 400){}
}

import colors from 'colors';

export function requestTime(req, resp, next) {
    req.requestTime = Date.now();
    next();
}

export function logger(req, resp, next) {
    console.log(colors.bgGreen.black(`Reg.time ${req.requestTime}`))
    next();
}
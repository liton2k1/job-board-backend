"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserTokens = void 0;
const jwt_1 = require("./jwt");
const config_1 = require("../config");
const createUserTokens = (user) => {
    const jwtPayload = {
        userId: user._id,
        email: user.email,
        role: user.role
    };
    const accessToken = (0, jwt_1.generateToken)(jwtPayload, config_1.envVars.JWT_ACCESS_SECRET, config_1.envVars.JWT_ACCESS_EXPIRE);
    const refreshToken = (0, jwt_1.generateToken)(jwtPayload, config_1.envVars.JWT_REFRESH_SECRET, config_1.envVars.JWT_REFRESH_EXPIRE);
    return {
        accessToken,
        refreshToken
    };
};
exports.createUserTokens = createUserTokens;

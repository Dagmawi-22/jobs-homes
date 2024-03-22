import { validationResult } from "express-validator";
import { responseHandler } from "./responseHandler.js";
import User from "../models/User.js";

export const titleCase = async (name) => {
    return name?.toLowerCase()?.split(' ').map(function (text) {
        return (text?.charAt(0).toUpperCase() + text?.slice(1));
    }).join(' ');
}

export const checkAllowedFields = (payload, fields) => {
    payload = Array.isArray(payload) ? payload : [payload];

    payload.forEach((item) => {
        const allowed = Object.keys(item).every(field => fields.includes(field));
        fields = typeof fields === 'string' ? fields : fields.join(', ');

        if(!allowed){
            throw new Error(`Wrong field passed. Allowed fields: ${ fields }`);
        }
    });
    return true;
}

export const validationHandler = (values = []) => {
    return async (req, res, next) => {
        await Promise.all(values.map((value) => value.run(req)));

        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        const _errors = errors.array();
        let message = "Invalid Parameters:";

        _errors.forEach((v) => {
            message += `${ v.param },`;
        });
        responseHandler(res, 422, false, { errors: errors.array() });
    }
};

export  const existingEmail = async (email) => {
    const check_email = await User.findOne({ email });
    if(check_email){
        throw new Error("Email already exist.");
    }
    return true;
}
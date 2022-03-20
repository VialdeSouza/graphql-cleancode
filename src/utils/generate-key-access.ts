import crypto from "crypto";

export function generateKeyAccess () {
    const keyAccess = crypto.randomBytes(2).toString("hex").toUpperCase();
    return keyAccess;
}
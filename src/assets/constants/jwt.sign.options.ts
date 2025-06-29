import { SignOptions } from "jsonwebtoken";

const options: SignOptions = {
    algorithm: "HS256", // SHA-256
    expiresIn: 60 * 60 * 48, // 2 days
    issuer: "Shopora",
    audience: "Shopora User",
}

export default options;
import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";

const config = process.env;

const verifyToken = (token: string) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.TOKEN_KEY as string, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(403).send("A token is required for authentication");
  }

  const token = bearer.split("Bearer ")[1].trim();
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default auth;

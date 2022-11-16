import { Request, Response, NextFunction } from "express";

export const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (authorization === "Bearer 10000") {
    next();
  } else {
    res.json({ message: "Vous n'avez pas le permission de faire ça..." });
  }
};

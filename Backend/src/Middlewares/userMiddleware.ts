import { Response , Request , NextFunction  } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware  = (req:Request , res : Response , next : NextFunction) => {

    try {
        const token = req.headers.authorization;
        if(!token) {
            res.status(404).json({
                msg : "Unauthorized Token"
            })
            return;
        }

        const decoded = jwt.verify(token , process.env.JWT_TOKEN as string);

        (req as any).user = decoded ;
        next();
    }

    catch(e){
        res.status(500).json({
            err : e
        });
    }
}
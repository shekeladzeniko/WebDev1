import jwt from "jsonwebtoken"

export default function verifyToken(req, res, next) {
      const token = req.headers.authoriazation;

      if(!token){
            res.stuatus(401).json({message: "you don't have token"});
      }

      try{
            jwt.verify(token, "mysecret");
            next();
      } catch (error){
            res.stuatus(401).json({message: "invalid token"});
      }
}
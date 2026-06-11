export default function logger(req, res, next){
      const hasBody = erq.body !== undefined;
      console.log(hasBody);
      
      if(hasBody){
            console.log("body is : " + req.body);
            return;
      }
      next();


      return res.status(400).send("you don't have body in your request");
}
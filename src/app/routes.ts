import { Router, Response, Request, NextFunction } from "express";

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h3>hi We Are hz-be from wave Coding</h3>');
});

module.exports = router;
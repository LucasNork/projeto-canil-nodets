import { Request, Response } from 'express';
export { home, dogs, cats, fishes };

const home = (req: Request, res: Response) => {
    res.send('Chegou');
    //res.render('pages.page);
};

const dogs = (req: Request, res: Response) => {

    //res.render('pages.page);
};

const cats = (req: Request, res: Response) => {

    //res.render('pages.page);
};

const fishes = (req: Request, res: Response) => {

    //res.render('pages.page);
};
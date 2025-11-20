import type { Request, Response } from "express";


export const exampleController = (req: Request, res: Response) => {
  return res.send("Hola mundo desde el controlador.");
};

import { Router } from "express";
import { getImageBG } from "./controller";

export const ImageBGRouter: Router = Router();

ImageBGRouter.get('/images', getImageBG)
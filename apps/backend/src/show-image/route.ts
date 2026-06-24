import { Router } from "express";
import { forceLoadImage } from "./controller";

export const ShowImageRouter: Router = Router();

// ShowImageRouter.get('/culture/:year/:slug', forceLoadImageCulture)
ShowImageRouter.get('/:year/:slug', forceLoadImage)
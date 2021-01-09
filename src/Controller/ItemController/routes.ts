import { Router } from "express";
import { checkSchema } from "express-validator";
import { validations } from "./validation";
import validationHandler from "../../Middlewares/ValidationHandler";
import controllerAdapter from "../../Middlewares/ControllerAdapter";
import ItemController from "./ItemController";

const router = Router();

router.post(
  "/createItem",
  checkSchema(validations.post as any),
  validationHandler(),
  controllerAdapter(ItemController, "createItem")
);

router.put(
  "/updateItem",
  checkSchema(validations.put as any),
  validationHandler(),
  controllerAdapter(ItemController, "updateItem")
);

router.delete(
  "/deleteItem",
  checkSchema(validations.delete as any),
  validationHandler(),
  controllerAdapter(ItemController, "deleteItem")
);

export default router;

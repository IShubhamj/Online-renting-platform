import { Router } from "express";
import { checkSchema } from "express-validator";
import { validations } from "./validation";
import validationHandler from "../../Middlewares/ValidationHandler";
import controllerAdapter from "../../Middlewares/ControllerAdapter";
import UserController from "./UserController";

const router = Router();

router.post(
  "/createUser",
  checkSchema(validations.post as any),
  validationHandler(),
  controllerAdapter(UserController, "createUser")
);

router.put(
  "/updateUser",
  checkSchema(validations.put as any),
  validationHandler(),
  controllerAdapter(UserController, "updateUser")
);

router.delete(
  "/deleteUser",
  checkSchema(validations.delete as any),
  validationHandler(),
  controllerAdapter(UserController, "deleteUser")
);

export default router;

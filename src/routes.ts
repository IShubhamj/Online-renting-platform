import { Router } from "express";
import userRoutes from "./Controller/UserController/routes";
import itemRoutes from "./Controller/ItemController/routes";

const router = Router();

router.use("/health-check", (req, res) => {
  res.status(200).json({
    message: "I'm running and accessible"
  });
});

router.use("/users", userRoutes);

router.use("/items", itemRoutes);

export default router;

import { Router } from "express";
import useRoutes from "./Controller/UserController/routes";

const router = Router();

router.use("/health-check", (req, res) => {
  res.status(200).json({
    message: "I'm running and accessible"
  });
});

router.use("/users", useRoutes);

export default router;

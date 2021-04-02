import { loginOwner } from "../controller/authController.js";
const authRoutes = (app) => {
  app.route("/login-owner").post(loginOwner);
};

export default authRoutes;

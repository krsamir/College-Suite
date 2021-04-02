import { test } from "../controller/appController.js";
const appRoutes = (app) => {
  app.route("/api/test").get(test);
};

export default appRoutes;

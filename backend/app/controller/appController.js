import appModel from "../models/appModel.js";

const createNotice = (req, res) => {
  appModel.createNotice(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const adminDetails = (req, res) => {
  appModel.adminDetails(req.user, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const test = (req, res) => {
  appModel.test(req.user, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

export { createNotice, adminDetails, test };

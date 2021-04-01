import appModel from '../models/appModel.js'

const test = (req,res) =>{
  appModel.test(req.user, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
}

export { test };

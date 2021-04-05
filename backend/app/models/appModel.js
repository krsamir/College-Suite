import SQL from "../Database/database.js";
const Task = () => {};

Task.createNotice = async (data, result) => {
  const { title, body } = data;
  let query = `SELECT * FROM admin_master where email="${email}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, "invaliduser");
    }
  });
};

Task.adminDetails = async (data, result) => {
  let query = `SELECT admin_name,email,organization,role  FROM admin_master where email="${data}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.test = async (data, result) => {
  result(null, { test: "message" });
};

export default Task;

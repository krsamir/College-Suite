import SQL from "../Database/database.js";
const Task = () => {};
const log = console.log;
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

Task.createNotice = async (data, result) => {
  const { noticeTitle, noticeBody } = data.body;
  const email = data.user;
  let query = `INSERT INTO notice (Title, body, created_by) VALUES ("${noticeTitle}", "${noticeBody}","${email}")`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, "success");
    }
  });
};

Task.getNotice = async (data, result) => {
  let query = `SELECT * FROM NOTICE ORDER BY ID DESC`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.editNotice = async (data, result) => {
  const { id, noticeTitle, noticeBody } = data;
  var d = new Date();
  var n = d.toLocaleString();
  let query = `UPDATE NOTICE SET Title = "${noticeTitle}", BODY="${noticeBody}", last_updated_at="${n}" WHERE (id="${id}")`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, "success");
    }
  });
};

Task.deleteNotice = async (data, result) => {
  const { id } = data;
  let query = `DELETE FROM NOTICE WHERE (id = "${id}")`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, "success");
    }
  });
};

export default Task;

import SQL from "../Database/database.js";
const Task = () => {};

Task.test = async(data,result)=>{
    const queryStatement = `SELECT * FROM TEST`
    SQL.query(queryStatement,(err,response)=>{
        if(err){
            console.log(err)
            result(err,null);
        }else{
            result(null,response)
        }
    });
}
export default Task;

// const newproduct = require('../models/products').model;
const addsuppliercontroller = require('../controllers/addNewSupplierController');
// const user = require('../models/user').model;
const express = require('express');
const router = express.Router();
// const app = require('../app');

/* GET tasks by Id*/

// exports.productRouter = async (req,res) =>{
//     const products =  await product.findAll();
//     res.send(products);
// }
router.post('/',addsuppliercontroller.addNewSupplier)
    

// router.get('/tasks/:id', async (req, res, next) => {
//   try{
//     const tasks = await task.findAll({
//       where:{
//         id: req.query.id
//       }
//     });
//     res.send({result:tasks});

//   }catch(error){
//     res.send(error);
//   }
//   });

// // Get All Tasks
// router.get('/tasks', async(req, res) => {
//   try{
//     const tasks = await task.findAll();
//     res.send({result:tasks});

//   }catch(error){
//     res.send(error);
//   }
//   });

// /* INSERT tasks */
// router.post('/tasks', async(req, res) => {
//   try{
//     const taskcreate = await task.create({
//       task: req.body.todo,
//       userId: req.body.user
//     });
//   res.send({result:taskcreate});
// }catch(error){
//   res.status(500).send(error);
//   console.log("Im the Error");
// }
// });

// // DELETE Task
// router.delete('/tasks/:id', async (req, res) => {
//   try{
//     await task.destroy({
//       where:{
//         id:req.params.id
//       }
//     });
//     res.send({message:'Task Deleted'});
//   }catch(error){
//     res.send(error);
//   }
// });

// // UPDATE TASK
// router.put('/tasks/:id', async (req, res) => {
//   try{
//     const tasksUpadte = await task.update(req.body,{
//       where:{
//         id:req.params.id
//       }
//     });
//     res.send({result:tasksUpdate});
//   }catch(error){
//     res.send(error);
//   }
// });

// router.put('/tasks/:id', function (req, res, next) {
//   connection.query(`UPDATE tasks SET task = ('${req.body.task}') WHERE id = ('${req.params.id}')`, (error,results, fields)=> {
//     if (error) {
//       throw(error);
//     } 
//     res.send({results});
//   },
// )
// })

// Get Login user
// router.get('/login', async (req, res, next) => {
//   try{
//     const users = await user.findAll({
//       where:{
//         username: req.body.username,
//         password: req.body.password
//       }
//     });
//     res.send({result:users});

//   }catch(error){
//     res.send(error);
//   }
//   });

// router.post('/login',function (req, res, next){
//   connection.query(`SELECT * FROM users WHERE username = ('${req.body.username}') AND password=('${req.body.password}')`,(error,results, fields) =>{
//     if (error) {
//       throw(error);
//     } 
//     res.send(results);
//   },
//   )
// })

/* INSERT User 'Register User' */
// router.post('/register', async(req, res) => {
//   try{
//     const registerUser = await user.create({
//       username: req.body.username,
//       password: req.body.password
//     });
//   res.send({result: registerUser});
// }catch(error){
//   res.status(500).send(error);
//   console.log("Im the Error");
// }
// });

// router.post('/register', function(req, res, next) {
//   connection.query(`INSERT INTO users (username,password) VALUES ('${req.body.username}','${req.body.password}')`, (error, results, fields) => {
//     if (error) throw error;
//     res.send({results});    
//   })
// });


// Get USer log Success
// router.get('/loginsuccess', async (req, res, next) => {
//   try{
//     const loginSuccess = await user.findAll({
//       where:{
//         username: req.body.username,
//         password: req.body.password
//       }
//     });
//     res.send({result:loginSuccess});

//   }catch(error){
//     res.send(error);
//   }
//   });
// router.post('/loginsuccess',function (req, res, next){
//   connection.query(`SELECT * FROM users WHERE username = ('${req.body.username}') AND password=('${req.body.password}')`,(error,results, fields) =>{
//     if (error) {
//       throw(error);
//     } 
//     res.send(results);
//   },
//   )
// })
// module.exports = router;

module.exports = router;

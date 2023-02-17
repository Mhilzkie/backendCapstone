const {Sequelize} =  require('sequelize');
// const { Sequelize, sequelize } = require('./models');

const sequelize =  new Sequelize("lecwisysdb","root","",{
    host :  "localhost",
    dialect : "mysql",
    dialectOption:{
        trustedConnection: true,
       
    },
    pool:{
        max: 10,
        min: 0,
        acquire:30000,
        idle: 10000
    }
})
try {
    sequelize.authenticate();
}catch(e){
    console.log('Unable to Connect');
    console.log(e);
}
exports.sequelize = sequelize;
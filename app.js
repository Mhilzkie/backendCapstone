gconst express = require('express');

// const { getProducts } =  require('./controllers/productController');
const  productRouter  =  require('./routes/productRoutes');
const  customerRouter  =  require('./routes/customerRoutes');
const  userRouter  =  require('./routes/userRoutes');
const supplierRouter =  require('./routes/supplierRoutes');
const stockinRouter  = require('./routes/supplierRoutes');
const dashboardloadCount =  require('./routes/dashboardloadCount');

const addNewProduct =  require('./routes/addNewProductRoutes');
const addNewCustomer =  require('./routes/addNewCustomerRoutes');
const addNewSupplier = require('./routes/addNewSupplierRoutes');
const addNewUser = require('./routes/addNewUserRoutes');
const displayProductName = require('./routes/productRoutes');
const getProductName = require('./routes/productDescriptionRoutes');
const deleteUser = require('./routes/deleteUserRoutes');

const deleteCustomers = require('./routes/deleteCustomerRoutes');
// const addNewSupplier =  require('./routes/addNewSupplierRoutes');

var createError = require('http-errors');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

// var productRouter = require('./routes/productRoutes');
// var usersRouter = require('./routes/users');

var app = express();


//app.use(cors({origin: 'http://localhost:3000'}));
app.use(cors({origin: 'https://lecwis-ys.vercel.app'}));

// app.listen(3000);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(4000);

// app.use('/',getProducts);
app.use('/products', productRouter);
app.use('/customers', customerRouter);
app.use('/users', userRouter);
app.use('/dashboard',dashboardloadCount);

// app.use('/report',reportRouter);
// app.use('/order',orderRouter);
app.use('/suppliers',supplierRouter);
app.use('/stockIn',stockinRouter);
// app.use('/stock-out',stockoutRouter);
app.use('/form-new-product',addNewProduct);
app.use('/form-new-user',addNewUser);
app.use('/form-new-customer',addNewCustomer);
app.use('/form-new-supplier',addNewSupplier);


app.use('/userdelete',deleteUser);
app.use('/customerdelete',deleteCustomers);
app.use('/productNamelist',displayProductName);
app.use('/productNamelist',getProductName);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send(err);
// });

// module.exports = app;

if(process.env.NODE_ENV === 'development'){
    module.exports = require('./MockEmployeeApi');
}else {
    module.exports = require('./RealEmployeeApi');
}
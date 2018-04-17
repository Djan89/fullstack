if(process.env.NODE_ENV === 'development' && process.env.API_HOST === ''){
    module.exports = require('./MockEmployeeApi');
}else {
    module.exports = require('./RealEmployeeApi');
}
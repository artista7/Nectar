

var config = {
    production: {
        database: {
            url: 'mongodb://webrole:webrolePasswordMongo123!@mongodb/crypto',
            database: 'crypto',
            collection: 'cryptoData'
        }
    },
    development: {
        database: {
            url: 'mongodb://webrole:passwordMongo123!@mongodb/crypto',
            database: 'crypto',
            collection: 'cryptoData'
        }
    }
};

module.exports.get = function() {
    const env = process.env.NODE_ENV || 'development';
    return config[env];
};



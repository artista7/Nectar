

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
            url: 'mongodb://webrole:webrolePasswordMongo123!@mongodb/crypto',
            database: 'crypto',
            collection: 'cryptoData'
        }
    }
};

module.exports.get = function() {
    const env = process.env.APP_ENV || 'development';
    return config[env];
};



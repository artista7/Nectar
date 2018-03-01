

var config = {
    production: {
        database: {
            url: 'mongodb://mongodb/crypto',
            database: 'crypto',
            collection: 'cryptoData'
        }
    },
    development: {
        database: {
            url: 'mongodb://mongodb/crypto',
            database: 'crypto',
            collection: 'cryptoData'
        }
    }
};

module.exports.get = function() {
    const env = process.env.NODE_ENV || 'development';
    return config[env];
};



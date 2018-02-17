

var config = {
    production: {
        database: {
            url: 'mongodb://rajatraj733:dbpwd@ds133558.mlab.com:33558/crypto',
            database: 'crypto',
            collection: 'crypto-data'
        }
    },
    development: {
        database: {
            url: 'mongodb://mongodb_test:27107/crypto',
            database: 'crypto',
            collection: 'crypto-data'
        }
    }
};

module.exports.get = function() {
    const env = process.env.NODE_ENV || 'development';
    return config[env];
};



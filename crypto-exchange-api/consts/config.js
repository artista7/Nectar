

var config = {
    dev: {
        database: {
            url: 'mongodb://rajatraj733:dbpwd@ds133558.mlab.com:33558/crypto',
            database: 'crypto',
            collection: 'crypto-data'
        }
    }
};

module.exports.get = function() {
    const env = process.env.NODE_ENV || 'dev';
    return config[env];
};



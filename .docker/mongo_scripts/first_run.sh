#!/bin/bash
ROOT_USER=${MONGODB_ROOT_USERNAME}
ROOT_PASS=${MONGODB_ROOT_PASSWORD}
ROOT_DB="admin"
ROOT_ROLE=${MONGODB_ROOT_ROLE}

USER=${MONGODB_USERNAME}
PASS=${MONGODB_PASSWORD}
DB=${MONGODB_DBNAME}
ROLE=${MONGODB_ROLE}

# Start MongoDB service
echo "Starting mongodb to add users and roles..."
/usr/bin/mongod &
while ! nc -vz localhost 27017; do sleep 1; done

# Create User if values exist 
if [[ -n $ROOT_USER ]] && [[ -n $ROOT_PASS]] && [[ -n $ROOT_DB]] && [[ -n $ROOT_ROLE]]; then
    echo "Creating root user: \"$ROOT_USER\"..."
    mongo $DB --eval "db.createUser({ user: '$USEROOT_USERR', pwd: '$ROOT_PASS', roles: [ { role: '$ROOT_ROLE', db: '$ROOT_DB' } ] });"
fi 

if [[ -n $USER ]] && [[ -n $PASS]] && [[ -n $DB]] && [[ -n $ROLE]]; then
    echo "Creating user: \"$USER\"..."
    mongo $DB --eval "db.createUser({ user: '$USER', pwd: '$PASS', roles: [ { role: '$ROLE', db: '$DB' } ] });"
fi

# Stop MongoDB service
/usr/bin/mongod --shutdown

echo "========================================================================"
echo "MongoDB User: \"$ROOT_USER\""
echo "MongoDB Password: \"$ROOT_PASS\""
echo "MongoDB Database: \"$ROOT_DB\""
echo "MongoDB Role: \"$ROOT_ROLE\""
echo "========================================================================"

echo "========================================================================"
echo "MongoDB User: \"$USER\""
echo "MongoDB Password: \"$PASS\""
echo "MongoDB Database: \"$DB\""
echo "MongoDB Role: \"$ROLE\""
echo "========================================================================"

rm -f /.firstrun
#!/bin/bash

# Initialize first run
if [ -e /.firstrun ]; then

    # echo "scheduling ackup cron job for 13:00"
    # cat <(crontab -l) <(echo "00 13 * * * /mongo_scripts/backup_job.sh") | crontab -

    # echo "scheduling ackup cron job for 01:00"
    # cat <(crontab -l) <(echo "00 01 * * * /mongo_scripts/backup_job.sh") | crontab -

    echo "Running first_run.sh"
    /mongo_scripts/first_run.sh
fi

# Start MongoDB
echo "Starting MongoDB..."
/usr/bin/mongod --auth $@
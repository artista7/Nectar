# Create image based on the official Python 3 image from the dockerhub
FROM python:3

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

#copying scripts
COPY ./.docker/django/scripts /django_scripts
RUN chmod +rx /django_scripts/*.sh

# Get all the code needed to run the app
COPY ./modern-django/ /app

#installing requirements
RUN pip install -Ur requirements/base.txt

# Expose the port the app runs in
EXPOSE 8000

# Serve the app
ENTRYPOINT ["/django_scripts/run.sh"]
FROM python:2.7
MAINTAINER "Bijia Lan <lbj.world@gmail.com>"

ADD ./site /code
WORKDIR /code

ENV PYCURL_SSL_LIBRARY openssl
RUN pip install -r requirements.txt

EXPOSE 5000

CMD python web_app.py --port=5000 --debug=False --logging=DEBUG 

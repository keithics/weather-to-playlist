FROM mongo:4.1.8-xenial
COPY dump /dump

CMD mongorestore /dump --uri="mongodb://weather-mongo:27017/weather?authSource=admin"

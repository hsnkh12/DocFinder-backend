const amqp = require('amqplib');

class Celrey{

    connect = async () => {
        const connection = await amqp.connect('amqps://gessyzwa:dmsvx0drMBCx3Dyg6BAcdCEwzirV81i6@rattlesnake.rmq.cloudamqp.com/gessyzwa');
        this.channel = await connection.createChannel();
    }
}

const celery = new Celrey()

const init = async () => {

    await celery.connect()

}  



module.exports.init = init
module.exports.celery = celery
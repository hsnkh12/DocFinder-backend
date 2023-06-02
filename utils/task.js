const { celery } = require('./celery.config')



async function delayQueuedTask(speciality, clinic_id) {

  const queueName = 'celery';
  const taskName = "src.celery.scrapNewDoctors"

  const headers = {
    'task': taskName,
    'id': speciality + " " + clinic_id,
    'lang': 'py',
    'argsrepr': '',
    'kwargsrepr': '{}'
  }

  const body = {
    args: [],
    kwargs:{'speciality': speciality, 'clinic_id': clinic_id}
  }

  const options = {
    headers:headers, 
    contentType:'application/json', 
    contentEncoding:'utf-8',
    deliveryMode: 2

  }
  await celery.channel.assertQueue(queueName);
  await celery.channel.publish('',queueName, Buffer.from(JSON.stringify(body)), options);

}
  
module.exports = {delayQueuedTask}


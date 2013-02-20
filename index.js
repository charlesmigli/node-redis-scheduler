var RedisQueue = require('node-redis-pubsub')
  , env = process.env.NODE_ENV || 'development'
  , options = { scope: env, port: 6379 }
  , mqClient = new RedisQueue(options);


mqClient.on('schedule', function ( data ) {
  var delay = data.delay
    , event = data.event
    , toSend = data.data;

    console.log('Receiving', event, delay, toSend);
  setTimeout(function() {
    mqClient.emit(event, toSend );
    console.log('Sending', event, delay, toSend);
  }, delay * 1000);
});

node-redis-scheduler
====================

Basic scheduler which fires a new event after a given delay. Uses Redis as pub/sub.

Call 

```
var RedisQueue = require('node-redis-pubsub')
  , env = process.env.NODE_ENV || 'development'
  , options = { scope: env, port: 6379 }
  , mqClient = new RedisQueue(options);

mqClient.emit('schedule', { delay: YOUR_DELAY, event: 'YOUR_FUTUTRE_EVENT', data: YOUR_DATA );
```

And `YOUR_FUTURE_EVENT` will fire `YOUR_DELAY` seconds after with `YOUR_DATA` data as parameter. Useful for asynchronous tasks like sending an email X minutes after a given event.

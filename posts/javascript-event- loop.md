---
title: 'Javascript Event Loop'
date: '2022-11-5'
image:
excerpt: A quick step-by-step guide to the JavaScript event loop.
isFeatured: true
---
## The Javascript Event Loop

**1.** When a piece of JavaScript code is executed, it runs in a single thread. This means that JavaScript can only execute one task at a time.

**2.** JavaScript is an event-driven language, which means that it responds to events such as mouse clicks, keyboard inputs, and network requests.

**3.** When an event occurs, JavaScript adds it to a queue called the "event queue". The event queue stores a list of events that are waiting to be processed.

**4.** While the event queue is not empty, JavaScript will continuously check the event queue for new events to process.

**5.** If there are events in the queue, JavaScript will take the first event and execute its associated callback function. The callback function is a function that is triggered when the event occurs.

**6.** When the callback function is executing, no other code can be executed. This means that JavaScript will wait for the callback function to complete before moving on to the next event in the queue.

**7.** Once the callback function has completed, JavaScript will check the event queue again for new events to process. If there are no more events in the queue, JavaScript will wait for new events to be added to the queue before checking again.

**8.** This process continues until all events in the queue have been processed.

**9.** It's important to note that some events, such as network requests, may take a long time to complete. While the event is processing, JavaScript will continue to check the event queue for new events to process. This allows JavaScript to handle multiple events simultaneously, even though it only has a single thread.

**10.** In summary, the JavaScript event loop is a mechanism that allows JavaScript to handle events in an asynchronous manner. By adding events to a queue and processing them one at a time, JavaScript is able to handle multiple events simultaneously and respond to user actions quickly and efficiently.
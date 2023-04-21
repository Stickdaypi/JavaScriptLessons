setTimeout(() => console.log('timeout'));// macro tasks work after micro tasks

Promise.resolve()
    .then(() => console.log('promise'));
    // micro task work first after sinc code .then .catch .finally .await

queueMicrotask(() => console.log('wow'));

    Promise.resolve()
    .then(() => console.log('promise_2'));

console.log('code');

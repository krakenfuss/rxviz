export default {
  'basic-interval': {
    name: 'Basic interval',
    code: `const { interval } = Rx;
const { take } = RxOperators;

interval(700).pipe(

)
`,
    timeWindow: 5000
  },
  'mouse-events': {
    name: 'Mouse Event Streams',
    code: `const { fromEvent } = Rx;
const { map } = RxOperators;`,
    timeWindow: 10000
  },
  'random-error': {
    name: 'Random error',
    code: `const { Observable } = Rx;

Observable.create(observer => {
  let n = 1;

  const intervalId = setInterval(() => {
    if (Math.random() < 0.8 && n < 9) {
      observer.next(n * n);
      n += 1;
    } else {
      observer.error('Oh no...');
    }
  }, 1000);

  return () => clearInterval(intervalId);
})
`,
    timeWindow: 10000
  }
};

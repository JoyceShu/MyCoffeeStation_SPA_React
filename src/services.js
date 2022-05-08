const RESOLVE_TIMEOUT_MSEC = 100;
const users = {};

function pinkySwear({ value, withError }={}) {
    let resolve;
    let reject
    const promise = new Promise( (res, rej) => {
      resolve = res;
      reject = rej
    });
    setTimeout(
      () => {
        if( withError ) {
          reject({ error: withError });
        } else {
          resolve(value)
        }
      },
      RESOLVE_TIMEOUT_MSEC
    );
    return promise;
  }

export function fetchLogin(username, password, city) {
    if(username === 'dog') {
        return pinkySwear({ withError: 'invalidPassword' });
      }
    return pinkySwear({ value: { ...users[username, password]}  });
  }
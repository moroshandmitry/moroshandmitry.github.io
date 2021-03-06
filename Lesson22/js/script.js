let str = "";
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    str += i;
  }
  console.log(str);
  str = "";
}

/*
// Изоляция ошибки от остального кода try {} catch {eror}
try {
  test // variable is not defined
} catch (e) {
  alert(`Ошибка ${e.name} : ${e.message} \n ${e.stack}`)
}
*/

const myFunc = () => {
  let err = "";
  // let i;
  try {
    i; // i is not defined
  } catch (error) {
    err = `Ошибка ${error.name} : ${error.message} \n ${error.stack}`;
    throw new SyntaxError(err);
  } finally {
    let test = 42;
    console.log(`${test} finally выполняется всегда`);
  }
  return i;
};

const visualization = function () {
  try {
    console.log(myFunc());
  } catch (e) {
    console.log(`${e.name} ${e.message}`);
  }
};

visualization();

let user =
  '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
console.log(user.friends[1]); // 1

setTimeout(() => {
  console.log("setTimeout will be displayed in a second");
}, 1000);

setInterval(() => {
  console.log("setInterval will be displayed in a second i++");
}, 1000);

const arr = [1, 2, 3, 4];

// setInterval(() => {
//   for (let i = 0; i <= 7; i++) {
//     arr.push(i)
//   }
//   console.log(arr)
// }, 1000)

// setInterval(() => {
//   arr.push(7)
//   console.log(arr)
// }, 1000)

/*
// Этот promise завершится с ошибкой через 1 секунду
let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    reject(new Error("время вышло!"));
  }, 10000);

});

promise
  .then(
    result => alert("Fulfilled: " + result),
    error => alert("Rejected: " + error.message) // Rejected: время вышло!
  );
*/

// let phones = [
//   {
//     model: 'iphone',
//     price: 1000
//   },
//   {
//     model: 'sm',
//     price: 1000
//   },
//   {
//     model: 'hw',
//     price: 1000
//   }
// ]

// let anotherStr = JSON.stringify(phones)
// console.log(anotherStr)

const xhr = new XMLHttpRequest();

xhr.open("GET", "phones.json", false);
xhr.send();

if (xhr.status != 200) {
  alert(`Error ${xhr.status} : ${xhr.statusText}`);
} else {
  alert(xhr.responseText);
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing data...");

    const backEndData = {
      server: "aws",
      port: 3000,
      status: "working",
    };

    resolve(backEndData);
  }, 2000);
});

p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      // resolve or reject
      resolve(data);
    }, 2000);
  });
})
  .then((clientData) => {
    clientData.fromPromise = true;
    return clientData;
  })
  .then((data) => console.log("Modified", data))
  .catch((err) => console.error("Error", err))
  .finally(() => console.log("finally"));

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
// sleep(2000).then(() => console.log("After 2 seconds"));
// sleep(3000).then(() => console.log("After 3 seconds"));

// for all resolved promise after 5 seconds
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promises");
});

// for first resolved promise after 2 seconds
Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
});

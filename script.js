document.getElementById("btn").onclick = function () {
  const input = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");

  // Clear any previous output
  outputDiv.innerHTML = "";

  // Convert input to number
  const num = Number(input);

  // Check for valid input
  if (isNaN(num)) {
    outputDiv.innerHTML = "Please enter a valid number!";
    return;
  }

  // Promise 1: resolve input number after 2 seconds
  const p1 = new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.innerHTML = `Result: ${num}`;
      resolve(num);
    }, 2000);
  });

  // Chain Promises
  p1.then((res1) => {
    // Promise 2: multiply by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = res1 * 2;
        outputDiv.innerHTML = `Result: ${result}`;
        resolve(result);
      }, 2000);
    });
  })
    .then((res2) => {
      // Promise 3: subtract 3
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res2 - 3;
          outputDiv.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((res3) => {
      // Promise 4: divide by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res3 / 2;
          outputDiv.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((res4) => {
      // Promise 5: add 10
      return new Promise((resolve) => {
        setTimeout(() => {
          const finalResult = res4 + 10;
          outputDiv.innerHTML = `Final Result: ${finalResult}`;
          resolve(finalResult);
        }, 1000);
      });
    })
    .catch((err) => {
      outputDiv.innerHTML = "Error: " + err;
    });
};



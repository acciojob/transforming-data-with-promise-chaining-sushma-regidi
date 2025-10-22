//your JS code here. If required.
document.getElementById("btn").onclick = function () {
  const input = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");
  const num = Number(input);

  // Clear previous output
  outputDiv.textContent = "";

  // Helper function to create a delayed promise
  function delayTransform(fn, time, label) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = fn();
        outputDiv.textContent = label + result;
        resolve(result);
      }, time);
    });
  }

  // Start promise chain
  new Promise((resolve) => {
    // First promise (after 2s): display the number
    setTimeout(() => {
      outputDiv.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    // Multiply by 2 after 2s
    .then((res) => {
      return delayTransform(() => res * 2, 2000, "Result: ");
    })
    // Subtract 3 after 1s
    .then((res) => {
      return delayTransform(() => res - 3, 1000, "Result: ");
    })
    // Divide by 2 after 1s
    .then((res) => {
      return delayTransform(() => res / 2, 1000, "Result: ");
    })
    // Add 10 after 1s
    .then((res) => {
      return delayTransform(() => res + 10, 1000, "Final Result: ");
    })
    .catch((err) => {
      outputDiv.textContent = "Error: " + err;
    });
};


console.log("Now is %s", new Date());

const today = new Date().toLocaleDateString();
console.log("Today is:", today); // Output: "Today is: MM/DD/YYYY" (based on locale)

document.querySelector("#button").onclick = function () {
  //   let output = document.querySelector("#output");
  //     output.innerHTML = "Hello, Olena";

  document.querySelector("#output").innerHTML = "Hello, Olena";
};

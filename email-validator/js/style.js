console.log("this is my script");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "akshay.codewithharry",
  email: "akshay.codewithharry@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()
  console.log("clicked!");
  resultCont.innerHTML =`<img width = "123" src="img/loading.svg" alt="">`

  let key = "ema_live_U6HcncccJlZWsewiIRXXCNhY72QyBeH6bo1U7d7x"
  let email = document.getElementById("username").value

  let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ``
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key]!==" "){

    str = str + `<div>${key}: ${result[key]}</div>`
    }
  }

  console.log(str)
  resultCont.innerHTML = str
});

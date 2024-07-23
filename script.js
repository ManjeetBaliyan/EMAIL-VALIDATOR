let result = {
  tag: "",
  free: true,
  role: false,
  user: "manjeetbaliyan21",
  email: "manjeetbaliyan21@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  Result.innerHTML = `<img width="70" src="loading.svg" alt="">`; // When result calculate loading gif show.

  let key = "ema_live_9iKGYEqD39luxgzDysrsu5ivxDbHCysSdroJYUEG";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  let res = await fetch(url);
  let result = await res.json();

  let str = "";
  for (key of Object.keys(result)) {
    if (result !== "" && result[key] !== " ") {
      str = str + `<div> ${key}: ${result[key]}</div>`;
    }
  }

  console.log(str);
  Result.innerHTML = str;
});

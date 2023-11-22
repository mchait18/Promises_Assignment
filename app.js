let favNumber = 40;
let url = "http://numbersapi.com";
// // # 1
axios.get(`${url}/${favNumber}?json`)
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log("REJECTED!!", err))

// # 2

axios.get(`${url}/3,7,89?json`)
  .then(res => {
    console.log(res.data)
  })
  .catch(err => console.log("REJECTED!!", err))

// # 3
let fourNumberFacts = [];

for (let i = 1; i < 5; i++) {
  fourNumberFacts.push(
    axios.get(`http://numbersapi.com/18?json`)
  );
}

Promise.all(fourNumberFacts)
  .then(factsArr => {
    for (res of factsArr) {
      $("body").append(`<p>${res.data.text}</p>`)
      // console.log(res.data.text)
    }
  })
  .catch(err => console.log(err));

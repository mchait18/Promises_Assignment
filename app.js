let favNumber = 40;
let url = "http://numbersapi.com";
// # 1 with promises
axios.get(`${url}/${favNumber}?json`)
  .then(res => {
    console.log(res.data.text)
  })
  .catch(err => console.log("REJECTED!!", err))

// # 1 with async/await
async function getNumFact() {
  let fact = await axios.get(`${url}/${favNumber}?json`)
  console.log(fact.data.text)
}
getNumFact()

// 2 with promises
let favoriteNums = [18, 36, 72, 108]
axios.get(`${url}/${favoriteNums}?json`)
  .then(res => {
    console.log(res.data)
  })
  .catch(err => console.log("REJECTED!!", err))

// 2 with await/async

async function getMultNumberFacts() {
  let favNumFacts = await axios.get(`${url}/${favoriteNums}?json`)
  console.log(favNumFacts.data)
}
getMultNumberFacts()

// # 3 with promises
let fourNumberFacts = [];

for (let i = 1; i < 5; i++) {
  fourNumberFacts.push(
    axios.get(`${url}/${favNumber}?json`)
  );
}

Promise.all(fourNumberFacts)
  .then(factsArr => {
    for (res of factsArr) {
      $("body").append(`<p>${res.data.text}</p>`)
    }
  })
  .catch(err => console.log(err));

// # 3 with async/await
async function FourFacts() {
  for (let i = 1; i < 5; i++) {
    fourNumberFacts.push(
      axios.get(`${url}/${favNumber}?json`)
    );
  }
  let facts = await Promise.all(fourNumberFacts)
  for (let fact of facts) {
    $("body").append(`<p>${fact.data.text}</p>`)
  }
}
FourFacts()
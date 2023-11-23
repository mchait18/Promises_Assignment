let baseURL = "https://deckofcardsapi.com/api/deck"
let firstCard = ""
let deck_id = ""
// 1 with promises
$.getJSON(`${baseURL}/new/draw/`).then(res => {
    console.log(`${res.cards[0].value.toLowerCase()} of ${res.cards[0].suit.toLowerCase()}`);
});
// 1 with async
async function part1() {
    let res = await $.getJSON(`${baseURL}/new/draw/`)
    console.log(`${res.cards[0].value.toLowerCase()} of ${res.cards[0].suit.toLowerCase()}`);
}
part1()
//2 with promises
$.getJSON(`${baseURL}/new/draw/`).then(res => {
    firstCard = `${res.cards[0].value.toLowerCase()} of ${res.cards[0].suit.toLowerCase()}`
    return $.getJSON(`${baseURL}/${res.deck_id}/draw/?count=1`)

}).then(res => {
    console.log(firstCard, `, ${res.cards[0].value.toLowerCase()} of ${res.cards[0].suit.toLowerCase()}`)
})
//2 with async/await
async function part2() {
    let res = await $.getJSON(`${baseURL}/new/draw/`)
    firstCard = `${res.cards[0].value.toLowerCase()} of ${res.cards[0].suit.toLowerCase()}`
    res = await $.getJSON(`${baseURL}/${res.deck_id}/draw/?count=1`)
    console.log(firstCard, `, ${res.cards[0].value.toLowerCase()} of ${res.cards[0].suit.toLowerCase()}`)
}
part2()
//3 with promises
let $cardButton = $("#card_button")
let $card = $("#card")
$.getJSON(`${baseURL}/new/shuffle`).then(res => {
    deck_id = res.deck_id
    $cardButton.show()
})

$cardButton.click(() => {
    $.getJSON(`${baseURL}/${deck_id}/draw/?count=1`).then(res => {
        if (res.remaining > 0) {
            $card.html(`<img src=${res.cards[0].image}>`)
        }
        else {
            $card.html("")
            $cardButton.remove()
        }
    })
})

//3 with async/await
async function part3() {
    let res = await $.getJSON(`${baseURL}/new/shuffle`)
    deck_id = res.deck_id
    $cardButton.show()
    $cardButton.click(async function () {
        res = await $.getJSON(`${baseURL}/${deck_id}/draw/?count=1`)
        if (res.remaining > 0) {
            $card.html(`<img src=${res.cards[0].image}>`)
        }
        else {
            $card.html("")
            $cardButton.remove()
        }
    })
}
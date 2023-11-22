let baseURL = "https://deckofcardsapi.com/api/deck"
let firstCard = ""
let deck_id = ""
// 1
$.getJSON(`${baseURL}/new/draw/`).then(res => {
    console.log(`${res.cards[0].value.toLowerCase()} of ${res.cards[0].suit.toLowerCase()}`);
});

//2
$.getJSON(`${baseURL}/new/draw/`).then(res => {
    firstCard = `${res.cards[0].value.toLowerCase()} of ${res.cards[0].suit.toLowerCase()}`
    return $.getJSON(`${baseURL}/${res.deck_id}/draw/?count=1`)

}).then(res => {
    console.log(firstCard, `, ${res.cards[0].value.toLowerCase()} of ${res.cards[0].suit.toLowerCase()}`)
})
//3
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
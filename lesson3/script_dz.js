cards = [
    {
        content: {
            title: "Test 1",
            description: "test",
        },
        description: { text: "testtest" }
    },
    {
        content: {
            title: "Test 2",
            description: "test",
        },
        description: { text: "test2test" }
    }
]

newCard = {
    content: {
        title: "",
        description: "",
    },
    description: { text: "" }
};

function assignNewCard(card) {
    cards.push(card)
};

assignNewCard(newCard)
newCard.content.title = 'test3'
console.log(cards[2].title)

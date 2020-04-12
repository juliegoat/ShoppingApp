const { ItemStore } = require('../item-store')

class SquadSession {
    constructor(roomId) {
        this.roomId = roomId
        this.shoppingList = new ItemStore()
    }

    get sessionStateMsg() {
        const result = JSON.stringify({ shoppingList: this.shoppingList.items })
        console.log(`Session state is ${result}`)
        return result
    }
}

module.exports = { SquadSession }

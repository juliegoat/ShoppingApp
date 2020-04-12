class ItemStore {

    constructor() {
        this._nextItemId = 0
        this._cache = []
    }

    get items() { return this._cache }

    addItem(item) {
        this._cache.push({ 'id': this._nextItemId, 'value': item })
        this._nextItemId++
    }

    removeItem(itemId) {
        this._cache = this._cache.filter(item => item.id != itemId)
    }

}

module.exports = { ItemStore }
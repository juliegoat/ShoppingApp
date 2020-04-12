const validateItem = (item) => true

class ItemStore {

    constructor() {
        this._nextItemId = 0
        this._cache = []
    }

    get items() { return this._cache }

    addItem(item) {
        if (validateItem(item)) {
            this._cache.push({ 'id': this._nextItemId, 'value': item })
            this._nextItemId++
        }
    }

    removeItem(itemId) {
        if (itemId >= 0 && itemId < this._cache.length) {
            let updated = []
            this._cache.forEach((item, idx) => {
                if (itemId != idx) updated.push(item)
            })
            this._cache = updated
        }
    }

}

module.exports = { ItemStore }
const { ItemStore } = require(".")

describe("Item Store", () => {

    test("must add items", () => {
        const store = new ItemStore()

        const item1 = { 'name': 'Test Item 1' }
        const item2 = { 'name': 'Test Item 1' }

        store.addItem(item1)
        expect(store.items.length).toBe(1)
        store.addItem(item2)
        expect(store.items.length).toBe(2)

        const resultItems = store.items.map(i => i.value)
        expect(resultItems).toContain(item1)
        expect(resultItems).toContain(item2)
    })

    test("must remove items", () => {
        const store = new ItemStore()

        const item1 = { 'name': 'Test Item 1' }
        const item2 = { 'name': 'Test Item 1' }

        store.addItem(item1)
        store.addItem(item2)

        const itemToRemove = store.items[0]

        store.removeItem(itemToRemove.id)
        expect(store.items.length).toBe(1)

        const resultItems = store.items.map(i => i.value)
        expect(resultItems).not.toContain(item1)
        expect(resultItems).toContain(item2)
    })

})
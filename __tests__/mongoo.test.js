'use strict';
require('@code-fellows/supergoose')

const ModelCollection = require('../src/models/data-collection-class');
const foodModel = require('../src/models/food');

const food = new ModelCollection(foodModel);

const testObj01 = {name:'strawberry', protein:2, category:'FRUIT'}
const testObj02 = {name:'watermelon', protein:5, category:'VEG'}

describe('Food Model Testing', () => {
    it('create new food item', async () => {
        let newItem = await food.create(testObj01)
        Object.keys(testObj01).forEach(key=> {
            expect(newItem[key]).toEqual(testObj01[key]);
        });
    })

    it('get ALL food items', async () => {
        await food.create(testObj02)
        let items = await food.get()
        let test = [testObj01, testObj02]
        for (let i = 0; i < items.length; i++) {
            expect(items[i].name).toEqual(test[i].name)
            expect(items[i].protein).toEqual(test[i].protein)
            expect(items[i].category).toEqual(test[i].category)
        }
    })

    it('get ONE item', async () => {
        let item = await food.getBy(testObj02)
        
        for( let property in testObj02 ) {
            expect(testObj02[property]).toEqual(item[0][property])
        }
    })
    
    it('UPDATE item', async () => {
        let getItems = await food.get()
        let testId = getItems[0]._id
        let itemForUpdate = {name:'Grapes', protein:1, category:'FRUIT'}
        let updatedItem = await food.update(testId, itemForUpdate)

        for( let property in itemForUpdate ) {
            expect(itemForUpdate[property]).toEqual(updatedItem[property])
        }
    })

    it('DELETE item', async () => {
        let getItems = await food.get()
        let testId = getItems[0]._id
        // test delete exist item  
        let deleteItem1 = await food.delete(testId)
        expect(deleteItem1.deleted).toEqual(true)
        // test after the item was deleted (not exist item)
        let deleteItem2 = await food.delete(testId)
        expect(deleteItem2.deleted).toEqual(false)
    })
} )

'use strict';

// const { findById } = require("./food");
let newArr = [];
class ModelCollection {
    constructor(model) {
        this.model = model;
        newArr.push(this.model)
    }

    get(_id) {
        if(_id) {
            return this.model.findById(_id)
        } else {
            return this.model.find({})
        }
    }

    getBy(obj) {
        return this.model.find(obj)
    }

    create(obj) {
        let newItem = new this.model(obj)
        return newItem.save()
    }

    update(_id, obj) {
        return this.model.findByIdAndUpdate(_id, obj, {new: true})
    }

    async delete(_id) {
        let deleted;

        let result = await this.model.findById(_id)
        if(result) {
            await this.model.findByIdAndDelete(_id)
            deleted = {
                deleted: true
            } 
        } else {
            deleted = {
                deleted: false ,
                error: 'maybe this item does nat exist'
            } 
        }
        return deleted
    }
}

module.exports = ModelCollection;
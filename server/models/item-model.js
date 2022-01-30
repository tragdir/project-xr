import mongoose from "mongoose"
const Schema = mongoose.Schema;

const Patient = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        daysOfWeek: {
            type: Map,
            of: String,
            required: false
        },
        timeframeNote: {
            type: String,
            required: false
        },
        priority: {
            type: Number,
            required: false
        },
        content: {
            type: String,
            required: true
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('item', Patient);

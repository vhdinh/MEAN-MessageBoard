// console.log("IN SERVER/MODELS/TOPIC.JS FILE")


var mongoose = require("mongoose");

var TopicSchema = new mongoose.Schema({
	topic: {type: String, require: true},
	description: String,
	category: {type: String, require: true},
	_user : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	_postings: [{type: mongoose.Schema.Types.ObjectId, ref: "postings"}]
}, {timestamps: true});

mongoose.model("topics", TopicSchema);
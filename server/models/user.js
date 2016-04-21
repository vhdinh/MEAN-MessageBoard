// console.log("IN SERVER/MODELS/USER.JS FILE")


var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
	name: 		{type: String, require: true}, 
	_topics: 	[{type: mongoose.Schema.Types.ObjectId, ref: "topics"}],
	_postings: 	[{type: mongoose.Schema.Types.ObjectId, ref: "postings"}],
	_comments: 	[{type: mongoose.Schema.Types.ObjectId, ref: "comments"}]
}, {timestamps: true});

mongoose.model("users", UserSchema);


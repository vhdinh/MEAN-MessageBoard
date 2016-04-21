// console.log("IN SERVER/MODELS/POST.JS FILE")


var mongoose = require("mongoose");


var PostSchema = new mongoose.Schema({
	message: {type: String, require: true},
	likes: {type: Number, default: 0},
	dislikes: {type: Number, default: 0},
	_user : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	_comments : [{type: mongoose.Schema.Types.ObjectId, ref: "comments"}],
	_topic: {type: mongoose.Schema.Types.ObjectId, ref: "topics"},
}, {timestamps: true});

mongoose.model("postings", PostSchema)
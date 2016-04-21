// console.log("IN SERVER/MODELS/COMMENT.JS FILE")


var mongoose = require("mongoose");


var CommentSchema = new mongoose.Schema({
	comment: {type: String, require: true},
	_user : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	_posting: {type: mongoose.Schema.Types.ObjectId, ref: "postings"},
}, {timestamps: true});

mongoose.model('comments', CommentSchema)
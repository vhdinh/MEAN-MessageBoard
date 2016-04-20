console.log("IN SERVER/MODELS/USER.JS FILE")


var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
	name: 		{type: String, require: true, minlength: 3}, 
	_topics: 	[{type: mongoose.Schema.Types.ObjectId, ref: "topics"}],
	_postings: 	[{type: mongoose.Schema.Types.ObjectId, ref: "postings"}],
	_comments: 	[{type: mongoose.Schema.Types.ObjectId, ref: "comments"}]
}, {timestamps: true});

mongoose.model("users", UserSchema);



var TopicSchema = new mongoose.Schema({
	title: {type: String, require: true},
	description: String,
	_user : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	_postings: [{type: mongoose.Schema.Types.ObjectId, ref: "postings"}]
}, {timestamps: true});

mongoose.model("topics", TopicSchema);

var PostSchema = new mongoose.Schema({
	message: String,
	likes: Number,
	_user : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	_comments : [{type: mongoose.Schema.Types.ObjectId, ref: "comments"}],
	_topics: {type: mongoose.Schema.Types.ObjectId, ref: "topics"},
}, {timestamps: true});

mongoose.model("postings", PostSchema)

var CommentSchema = new mongoose.Schema({
	comment: {type: String, require: true},
	_user : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	_postings: {type: mongoose.Schema.Types.ObjectId, ref: "postings"},
}, {timestamps: true});

mongoose.model('comments', CommentSchema)
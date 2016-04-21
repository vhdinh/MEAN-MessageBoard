dashboard_app.controller("TopicController", function($scope, $location,$routeParams, TopicFactory,LoginFactory, PostFactory, CommentFactory){

	var get_user = function(){
		LoginFactory.getUser(function(data){
			if(data){
				$scope.user = data
			}
			else{
				$location.url("/login")
			}
		})
	}
	get_user();


	curr_Topic_Id = {
		_id: $routeParams.id
	}
	// console.log("Current Topic ID ",curr_Topic_Id)

	// console.log("CURRENT TOPIC ID AS OBJECT", currTopic)
	getTopic = {}

	//getting the one topic
	TopicFactory.getOneTopic(curr_Topic_Id, function(data){
		$scope.topic = data
		// console.log("MY ONE TOPIC", $scope.topic)
		getTopic = $scope.topic		
	})


	$scope.logout = function(){
		$location.url("/login");
		$scope.user = {};
		LoginFactory.logout();
	}

	//getting all the posts back
	getPosts = function(){
		curr_user = LoginFactory.user
		PostFactory.getPosts(curr_Topic_Id, function(data){
			$scope.posts = data
			// console.log("ALL POSTS", $scope.posts)
		})
	}
	getPosts()

	getComments = function(){
		CommentFactory.getComments(function(data){
			console.log("ALL MY COMMENTS", data)
		$scope.comments = data
		})
	}
	getComments()



	$scope.addPost = function(){
		topicId = getTopic._id
		//get current topic id as object
		currTopId = {
			_id: topicId
		}
		curr_user = LoginFactory.user._id
		currUserId = {
			_id : curr_user
		}
		$scope.posting._user =  currUserId
		$scope.posting._topic = currTopId
		
		if(!$scope.posting.length < 1){
			$window.alert("message cannot be blank")
			$scope.posting = {}
		}
		else{
		PostFactory.addPost($scope.posting, function(data){
			// $scope.posts = data;
			getPosts()
			$scope.posting = {};
		})
		}
	}

	$scope.like = function(post){
		PostFactory.likePost(post, function(){
			getPosts()
		})
	}


	$scope.dislike = function(post){
		PostFactory.dislikePost(post, function(){
			getPosts()
		})
	}


	$scope.addComment = function(comment, post){
		current_user = LoginFactory.user._id
		currentUserId = {
			_id : current_user
		}
		comment._user = currentUserId
		currentPostId = {
			_id : post._id
		}
		comment._posting = currentPostId
		console.log("comment", comment);

		CommentFactory.addComment(comment, function(){
			getPosts();
			getComments();
		})

	}

})
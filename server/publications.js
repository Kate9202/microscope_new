import * as Meteor from "es6-promise";

if (Meteor.isServer) {
    Meteor.publish('posts', function () {
        return Posts.find();
    });
}

/*Meteor.publish('comments', function() {
	return Comments.find();
});*/

Meteor.publish('comments', function(postId) {
	check(postId, String);
    return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
	return Notifications.find();
});

/*
Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});*/

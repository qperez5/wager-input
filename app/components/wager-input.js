import Ember from 'ember';

export default Ember.Component.extend({
	scoreHome: 0,
	scoreAway: 0,
	onGoLeft: null,
	onGoRight: null,
	event: null,

	homeSelectionChoosen: function(){
		return this.get("event")[this.get("scoreHome")];	
	}.property("scoreHome"),

	actions: {
		homeUp: function(){
			console.log("home up");
			var idx = this.get("scoreHome");
			var selectionLength = this.get("event").length;
			if(idx > 0 && idx < selectionLength){
				this.set("scoreHome",idx++);
			}else{
				this.set("scoreHome", 0);
			}
		},

		homeDown: function(){
			console.log("home down");
			var idx = this.get("scoreHome");
			var scroreHomeUp = this.set("scoreHome",idx--);
			
		},

		awayUp: function(){
			console.log("away up");
		},

		awayDown: function(){
			console.log("away down");
		},

		leftClicked: function(){
			this.sendAction('left');									
		},

		rightClicked: function(){			
			this.sendAction('right');									
		}
	},

	eventName: function(){
		var evt = this.get("event");		
		if(evt!=null){
			return evt.get("name");
		}
	}.property("event")
});

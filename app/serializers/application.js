import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	
	normalizeEvent: function(hash){		
		var result = {};
		result.type = 'event';
		result.id = hash.id;
		result.attributes = {};
		result.attributes.name = hash.name;
		result.attributes.starts = hash.starts;
		result.relationships = {'selections': {'data':[]}};
		result.included = [];
		var serializer = this;
		if(hash.selections){
			hash.selections.forEach(function(selectionHash,index,enumerable){
				result.relationships.selections.data.pushObject(serializer.createSelectionRel(selectionHash));
				result.included.pushObject(serializer.createSelection(selectionHash));
			});
		}
		
		return result;	
	},

	createSelectionRel: function(selectionHash){
		return {'type': 'selection','id': selectionHash.id};
	},
	
	createSelection: function(selectionHash){
		return {
			'type': 'selection',
			'id': selectionHash.id,
			'attributes': {
				'away': selectionHash.away,
				'home': selectionHash.home,
				'name': selectionHash.name,
				'price': selectionHash.price
			}
		};
	},
	
	normalizeFindAllResponse: function (store, primaryModelClass, payload, id, requestType){
		var resultingPayload = {};
		resultingPayload.data = [];
		var serializer = this;
		payload.events.forEach(function(eventHash,index,enumerable){
			resultingPayload.data.pushObject(serializer.normalizeEvent(eventHash));			
		});
		return resultingPayload;
	}
	

});

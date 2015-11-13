import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'assets/data',
	pathForType: function(type){
		return 'data.json';	
	}
});

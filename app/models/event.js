import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	starts: DS.attr(),
	selections: DS.hasMany('selection')  
});

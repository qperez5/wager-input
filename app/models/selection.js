import DS from 'ember-data';

export default DS.Model.extend({
  	away: DS.attr(),
	home: DS.attr(),
	name: DS.attr(),
	price: DS.attr()
});

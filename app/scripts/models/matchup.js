/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MatchupModel = Backbone.Model.extend({
		// Let's create an opponent model next [DBU 9/18/13]
        defaults: {
			final: false,
			inProgress: false,
			dateStart: '12:00 PM EDT',
			scoringPeriod: 0,
			awayOpponent: 'Away Team',
			homeOpponent: 'Home Team',
			televisedOn: 'N/A'
        },
        parse: function(data) {
        	return _.extend({
        		awayOpponent: data.opponents[1],
        		homeOpponent: data.opponents[0]
        	}, data);
        }
    });

    return MatchupModel;
});
/*global define*/

define([
    'underscore',
    'backbone',
    'models/matchup'
], function (_, Backbone, MatchupModel) {
    'use strict';

    var MatchupCollection = Backbone.Collection.extend({
        model: MatchupModel,
        url: 'http://proxydev.espn.go.com/nfl-pigskin-pickem/2013/en/format/ajax/matchupDetails?ID=273,274,275,276,278,279,280,281,282,283,284,285,286,287,288',
		sync: function(method, model, options) {
			var params = _.extend({
				type: 'GET',
				dataType: 'jsonp',
				url: model.getUrl(),
				callback: "JSON_CALLBACK",
				processData: false
			}, options);
			return $.ajax(params);
		},
		getUrl: function() {
			return this.url;
		}
	});

    return MatchupCollection;
});
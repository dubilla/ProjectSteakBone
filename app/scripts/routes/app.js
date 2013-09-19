/*global define*/

define([
    'jquery',
    'backbone',
    'views/matchupCollection',
    'collections/matchup'
], function ($, Backbone, MatchupCollectionView, MatchupCollection) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
        	'': 'matchups',
        	'highfive': 'highfive'
        },
        matchups: function() {
        	// Fat models, skinny controllers, dude - So I guess this becomes a method on the model? collection? [DBU 9/19/13]
        	var matchups = new MatchupCollection(),
        		matchupCollectionView;

        	matchups.fetch({
				method: 'jsonp',
				success: function() {
					// Remove this [DBU 9/19/13]
					console.log(matchups);
					matchupCollectionView = new MatchupCollectionView({collection: matchups});
				},
				error: function(xhr, status, error) {
					console.log();
				}
			});
		},
		highfive: function() {
			alert('Woohoo! *highfive*');
		}
    });

    return AppRouter;
});
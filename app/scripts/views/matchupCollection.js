/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/matchup'
], function ($, _, Backbone, JST, MatchupView) {
    'use strict';

    var MatchupCollectionView = Backbone.View.extend({
    	el: '#app',
        initialize: function() {
        	var that = this;
        	this._matchupViews = [];
        	this.collection.each(function(matchup) {
        		that._matchupViews.push(new MatchupView({
        			model: matchup,
        			tagName: 'li'
        		}));
        	})
        	this.render();
        },
        render: function() {
        	var that = this;
        	$(this.el).empty();

        	_(this._matchupViews).each(function(matchupView) {
        		$(that.el).append(matchupView.render().el);
        	})
        }
    });

    return MatchupCollectionView;
});
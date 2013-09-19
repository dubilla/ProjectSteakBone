/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MatchupView = Backbone.View.extend({
        template: JST['app/scripts/templates/matchup.ejs'],
        render: function() {
        	this.$el.html(this.template(this.model.toJSON()));

        	return this;
        }
    });

    return MatchupView;
});
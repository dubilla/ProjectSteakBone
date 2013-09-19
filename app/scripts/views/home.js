/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HomeView = Backbone.View.extend({
    	el: '#app',
        template: JST['app/scripts/templates/home.ejs'],
        render: function() {
        	this.$el.html(this.template());

        	return this;
        },
		initialize: function() {
        	this.render();
    	}
    });

    return HomeView;
});
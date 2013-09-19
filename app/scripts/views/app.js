/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/matchup'
], function ($, _, Backbone, JST, Matchups) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#app',
        initialize: function() {
        }
    });

    return AppView;
});
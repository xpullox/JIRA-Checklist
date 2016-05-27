'use strict';

$(function(){
	/**
	 * Add resize handler for resize iframe in jira
	 */
	$(function(){
		var $app = $('#checklists');
		AP.resize($app.width(), $app.height());
	});

});


var angularApplication = angular.module('checklistsApp', ['ui.sortable', 'ngSanitize', 'colorpicker.module']).config(function($interpolateProvider){
		$interpolateProvider.startSymbol('[[').endSymbol(']]');
});
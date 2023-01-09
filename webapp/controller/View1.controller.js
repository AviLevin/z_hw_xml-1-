sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Button",
	"sap/m/MessageToast"
], function(Controller, Button,
	MessageToast) {
	"use strict";


	return Controller.extend("hwz_hw_xml.controller.View1", {

onUploadFile: function () {
      MessageToast.show("Hello World!");
    }


	});
});
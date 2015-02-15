// "self" is a global object in content scripts
// Listen for a "drawBorder"
//self.port.on("remove", function(url) {
  
self.port.on("clean", function(url) {

   if ((new RegExp("http://www.lemonde.fr/.*")).test(url)) {

	console.log("On le monde web site ...");

	$(document).find('#barre_titre').remove();	
	$(document).find('#alerte_tracking').remove();
	$(document).find('#header_utilisateur').remove();
	$(document).find('#surheader').remove();
	$(document).find('#bandeau_bas').remove();

	$(document).find('#bandeau_bizdev').remove();
	$(document).find('.videos').remove();
	$(document).find('.services').remove();

	$(document).find('.banniere.sold').remove();
	$(document).find('.ombrelle').remove();
	$(document).find('.meter_overlay').remove();

	$(document).find('.meter_toaster').remove();

	$(document).find('.fb-like.fb_iframe_widget').remove();

	$(document).find('iframe').remove();
  
    }

});


    



// 1. paramètres généraux et habillage
///Paramètre généraux de la carte
var map = L.map('map',
{
	maxZoom: 18,
	minZoom: 9,
	maxBounds: [
		[40, -6],
		[55, 9]
	],
});

//attribution
var attribMARGINOV = '<b>Données</b> © <a href="http://www.marginov.cnrs.fr/?page_id=214">MARGINOV</a>'

map.setView([44.35622,-0.76433], 9);
//fond de carte
// création d'une couche "osmfr"
//OSM FR utilise les données OSM avec une charte graphique développé pour le territoire français 
var osmfr = L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
{
	attribution: '<b>Fond de carte</b> © <a href="http://osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="http://openstreetmap.fr">OSM France</a><br>',
	opacity: 0.7,
	minZoom: 9,
	maxZoom: 18,
	
});


/*///paramètrage de la vue dela carte
var centerMaptest = [coucheTerritoires.getBounds().getCenter().lat,coucheTerritoires.getBounds().getCenter().lng];
//si le centerMap = auto est auto alros centre de gravité de la couche territoires, sinon utilisation de la valeur de centermap
function setMapCenter (centerMap){
	if (centerMap === "auto"){return centerMaptest;}else{return centerMap;}
}
map.setView(setMapCenter (centerMap), zoomMap);*/

//création des différents niveaux d'affichage des couches: les panes
map.createPane('205');
map.getPane('205').style.zIndex = 205;
map.createPane('600');
map.getPane('600').style.zIndex = 600;
map.createPane('610');
map.getPane('610').style.zIndex = 610;
map.createPane('615');
map.getPane('615').style.zIndex = 615;
map.createPane('620');
map.getPane('620').style.zIndex = 620;
map.createPane('630');
map.getPane('630').style.zIndex = 630;
map.createPane('635');
map.getPane('635').style.zIndex = 635;



// Ajouter ajout des tile layers	
// création d'une couche "bwLayer" un fond de carte en grisaille
var bwLayer = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
{
	attribution: '<b>Fond de carte</b> © <a href="http://osm.org/copyright">OpenStreetMap</a><br>' + attribMARGINOV,
	opacity: 0.8,
	maxZoom: 19,
	
}).addTo(map);

var watercolor = L.tileLayer('http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',{
	attribution:'<b>Fond de carte</b> © <a href="http://osm.org/copyright">OpenStreetMap</a><br><a href="http://maps.stamen.com/#watercolor/">Stamen</a>',
	opacity: 0.8,
	maxZoom: 19,
	
	});
	


var maplabels = L.tileLayer('http://a.tile.stamen.com/toner-labels/{z}/{x}/{y}.png',{
	attribution:'<b>Fond de carte</b> © <a href="http://osm.org/copyright">OpenStreetMap</a><br><a href="http://maps.stamen.com/#watercolor/">Stamen</a>',
	opacity: 0.8,
	maxZoom: 19,
	pane:'205',
	});
	
var stamenToner = L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png',{
	attribution:'<b>Fond de carte</b> © <a href="http://osm.org/copyright">OpenStreetMap</a><br><a href="http://maps.stamen.com/#toner/">Stamen</a>',
	opacity: 0.8,
	maxZoom: 19,
	pane:'205',
	});







//échelle
L.control.scale(
{
	imperial: false,
	maxWidth: 200,
	updateWhenIdle: false
}).addTo(map);

//flèche du nord
var urlNorthArray = '<img src="style/aceG8oMc4.png" style="width:30px;">'
var north = L.control(
{
	position: "topleft"
});
north.onAdd = function(map)
{
	var div = L.DomUtil.create("div", );
	div.innerHTML = urlNorthArray;
	return div;
}
north.addTo(map);


////Paramétrage des filtres

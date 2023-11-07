## order:
channel_parser.js  ==>console logging "containerDefault-YUSmu3" put it on ind.html

channels_html_id_logger.node.js ==>console logging something like : 
var embedlink1 = "𝔅𝔲𝔯𝔤 - casual - casual [1148646206424219729].html_Files.html";
var embedlink1 = "𝔅𝔲𝔯𝔤 - casual - media [1148646649699241984].html_Files.html";
var embedlink1 = "𝔅𝔲𝔯𝔤 - info - info [1146917036446990516].html_Files.html";
var embedlink1 = "𝔅𝔲𝔯𝔤 - secret chat - casual-secret [1130824135665262653].html_Files.html";
var embedlink1 = "𝔅𝔲𝔯𝔤 - 𝔅𝔲𝔯𝔤 - general [1144370885432713277].html_Files.html";
var embedlink1 = "𝔅𝔲𝔯𝔤 - 𝔅𝔲𝔯𝔤 - scientific [1135386186060415046].html_Files.html";
var embedlink1 = "𝔅𝔲𝔯𝔤 - 𝔅𝔲𝔯𝔤 - studies [1130820056373285045].html_Files.html";

modifie it to 
const embedlinks = [
  "𝔅𝔲𝔯𝔤 - casual - casual [1148646206424219729].html_Files.html",
  "𝔅𝔲𝔯𝔤 - casual - media [1148646649699241984].html_Files.html",
  "𝔅𝔲𝔯𝔤 - info - info [1146917036446990516].html_Files.html",
  "𝔅𝔲𝔯𝔤 - secret chat - casual-secret [1130824135665262653].html_Files.html",
  "𝔅𝔲𝔯𝔤 - 𝔅𝔲𝔯𝔤 - general [1144370885432713277].html_Files.html",
  "𝔅𝔲𝔯𝔤 - 𝔅𝔲𝔯𝔤 - scientific [1135386186060415046].html_Files.html",
  "𝔅𝔲𝔯𝔤 - 𝔅𝔲𝔯𝔤 - studies [1130820056373285045].html_Files.html"
];
put it in channels_html_maker.js then run it

embeded_tag_logger.node.js   ==>console logging <embed  src="xxx" frameborder="0"></embed> put it on ind.html
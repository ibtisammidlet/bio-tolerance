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
  
make a blog post with:  
<embed  src="https://rawcdn.githack.com/ibtisammidlet/bio-tolerance/bd7b590d19c9edc168f04625fc4687a0b377827c/html-backups/Prefrontality%20(online%20v2)/PBIO%20_%20Prefrontal%20-%20%F0%9F%A7%A0%20prefrontal%20-%20shitposting%20[1146611707276439622].html_Files.html" frameborder="0"></embed>  
  
<style>  
embed {  
    visibility: visible !important;  
    position: fixed;  
    top: 0;  
    width: 100%;  
    height: 100%;  
    right: 0;  
        border-radius: 0px;  
  
}  
body * {  
  visibility: hidden;  
}  
html {  
    overflow: hidden;  
}  
  
</style>  
  
replace src with one from https://raw.githack.com/ linking to github .html_Files.html file.  
  
## editional editing:  
use notepad++ replace in files function to change <h1 class="name-3Uvkvr">Prefrontal</h1> to the new server name in all *.html_Files.html in this folder  
![alt text](./res/Screenshot-2023-11-07-155010.png "Hover Text")    
  
replace all containerDefault-YUSmu3 divs in html_Files.html files with the one in ind.html manually, this function was going to be coded by html_Files.html_patcher.js
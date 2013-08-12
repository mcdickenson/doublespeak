String.prototype.titleize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function replaceDoubleSpeak(content){
	var dictionary = {
		"adversary": "anybody",
		"extrajudicial": "illegal",
		"rendition": "kidnapping",
	}

	for (key in dictionary) {
		content = content.replace(new RegExp(key, "g"), dictionary[key]);

		newkey = key.titleize();
		dictionary[newkey] = dictionary[key].titleize();
		content = content.replace(new RegExp(newkey, "g"), dictionary[newkey]); 
  }

  return content;
}

document.body.innerHTML = replaceDoubleSpeak(document.body.innerHTML);
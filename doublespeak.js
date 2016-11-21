String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.titleize = function() {
    var string_array = this.split(' ');
    string_array = string_array.map(function(str) {
      hyphenated_array = str.split('-')
      hyphenated_array = hyphenated_array.map(function(str2) {
        return str2.capitalize();
      })
      return hyphenated_array.join('-').capitalize();
    });

    return string_array.join(' ');
}

function replaceDoubleSpeak(content){
	var dictionary = {
		"adversary": "anybody",
		"extrajudicial": "illegal",
		"rendition": "kidnapping",
    "post-truth": "lying",
    "fake news": "propaganda",
    "alt-right": "white supremacist",
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
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");

function encode(string) {
	let binaryString = "";
	for (const char of string) {
		let plus = char.charCodeAt(0).toString(2);
		plus = `${plus.length < 8 ? "0".repeat(8 - plus.length) : ""}${plus}`;
		binaryString += plus;
	}
	let index = 1;
	let currentString = "";
	let newString = "";
	for (const character of binaryString) {
		currentString += character;
		if (index % 6 == 0) {
			const base64Character = characters[parseInt(currentString, 2)];
			newString += base64Character;
			currentString = "";
		}

		index++;
	}
	if (currentString.length > 0) {
		let addEquals = "";
		if (currentString.length == 4) addEquals = "=";
		if (currentString.length == 2) addEquals = "==";
		currentString = `${currentString.length - 6 ? "0".repeat(6 - currentString.length) : ""}${currentString}`;
		const base64Character = characters[parseInt(currentString, 2)];
		newString += base64Character + addEquals;
		currentString = "";
	}
	return newString;
}

function decode(string) {
	let binaryString = "";
	for (const character of string) {
		const base64Binary = characters.indexOf(character).toString(2);
		binaryString += `${base64Binary.length < 6 ? "0".repeat(6 - base64Binary.length) : ""}${base64Binary}`;
	}

	let currentString = "";
	let newString = "";
	let index = 1;
	for (const character of binaryString) {
		currentString += character;
		if (index % 8 == 0) {
			const base64Character = String.fromCharCode(parseInt(currentString, 2));
			newString += base64Character;
			currentString = "";
		}

		index++;
	}
	return newString;
}

module.exports = {
	encode,
	decode,
	base64Characters: characters,
};

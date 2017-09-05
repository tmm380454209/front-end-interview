/*
判断一个单词是否是回文？
 */

function checkPalindrom(str) {
	return str == str.split("").reverse().join("");
}

/*
去掉一组整型数组重复的值
 */
function unique(arr) {
	let hashTable = {};
	let data = [];
	for(let i = 0;i<arr.length;i++) {
		if(!hashTable[arr[i]]) {
			hashTable[arr[i]] = true;
			data.push(arr[i]);
		}
	}
	return data;
}

/*
给出一段英文连续的英文字符窜，找出重复出现次数最多的字母
输入 ： afjghdfraaaasdenas 
输出 ： a
 */
function findMaxDuplicateChar(str) {
	if(str.length === 1) {
		return str;
	}
	let charObj = {};
	for(let i = 0;i<str.length;i++) {
		if(!charObj[str.charAt(i)]) {
			charObj[str.charAt(i)] = 1;
		}else {
			charObj[str.charAt(i)]+= 1;
		}
	}
	let maxChar = '',maxValue = 1;
	for(var k in charObj) {
		if(charObj[k] >= maxValue) {
			maxChar = k;
			maxValue = charObj[k];
		}
	}
	return maxChar;
}
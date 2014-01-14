function randomNum(min,max) {return Math.random() * (max - min) + min;}
function randomInt(min,max) {return Math.floor(Math.random() * (max - min + 1)) + min;}



function randomColor(type) {
	var result=randomInt(0,16777215)
	switch(type)
	{
		case 'hex':
		result='#'+result.toString(16);
		break;
		case 'rgb':
		result=hexToRGBcomponents(result.toString(16));
		break;
		default:
		result='#'+result.toString(16);
	}
	return result;	/*return randomInt(0,16777215).toString(16);*/}



function randomName(length,capitalize) {
	var result="";
	while(result.length < length)
	{
		var letter=randomInt(0,36);	//every letter + 2 for each vowel (except +1 for y)
		switch(letter)
		{
			case 0:
			result+='a';
			break;
			case 1:
			result+='a';
			break;
			case 2:
			result+='a';
			break;
			case 3:
			result+='b';
			break;
			case 4:
			result+='c';
			break;
			case 5:
			result+='d';
			break;
			case 6:
			result+='e';
			break;
			case 7:
			result+='e';
			break;
			case 8:
			result+='e';
			break;
			case 9:
			result+='f';
			break;
			case 10:
			result+='g';
			break;
			case 11:
			result+='h';
			break;
			case 12:
			result+='i';
			break;
			case 13:
			result+='i';
			break;
			case 14:
			result+='i';
			break;
			case 15:
			result+='j';
			break;
			case 16:
			result+='k';
			break;
			case 17:
			result+='l';
			break;
			case 18:
			result+='m';
			break;
			case 19:
			result+='n';
			break;
			case 20:
			result+='o';
			break;
			case 21:
			result+='o';
			break;
			case 22:
			result+='o';
			break;
			case 23:
			result+='p';
			break;
			case 24:
			result+='q';
			break;
			case 25:
			result+='r';
			break;
			case 26:
			result+='s';
			break;
			case 27:
			result+='t';
			break;
			case 28:
			result+='u';
			break;
			case 29:
			result+='u';
			break;
			case 30:
			result+='u';
			break;
			case 31:
			result+='v';
			break;
			case 32:
			result+='w';
			break;
			case 33:
			result+='x';
			break;
			case 34:
			result+='y';
			break;
			case 35:
			result+='y';
			break;
			case 36:
			result+='z';
		}
	}
	if (capitalize) return result.charAt(0).toUpperCase()+result.slice(1);
	return result;}
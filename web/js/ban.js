// 금지단어
var ban = new Array(
'잡부','막걸리','좀비'
);
// 금지단어 판단
function filterWord(content) {
	for (prop in ban) {
		if(content.toLowerCase().indexOf(ban[prop]) > -1) {
			return ban[prop];
		}
	}
	return '';
}

// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
    var count = 0;

    // 코드를 작성해주세요.
    var tmp = word.toUpperCase();
    var i = tmp.length;
    while (i--) {
        var c = tmp.charAt(i)
        if (c === ch) {
            count++;
        }
    }
    return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    // 코드를 작성해주세요.
    var count = 0;
    var i = word.length;
    while (i--) {
        if (word.toUpperCase().charAt(i) === 'A') {
            count++;
        }
    }
    return count;
}

var birthdayData = [
    '20010309전소미',
    '19960828김세정',
    '19991112최유정',
    '19960209김청하',
    '19990719김소혜',
    '19981216주결경',
    '19971201정채연',
    '19991204김도연',
    '19991204강미나',
    '19951218임나영',
    '19990803유연정'
];

function printMinors(arr) {
    console.log("미성년자 명단:");

    // 코드를 작성하세요.
    // 이 함수에 리턴값은 없습니다.
    for (var i = 0; i < arr.length; i++) {
        var year = arr[i].substr(0, 4);
        if (Number(year) > 1998) {
            console.log(arr[i]);
        }
    }
}

// 테스트 코드
printMinors(birthdayData);

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));
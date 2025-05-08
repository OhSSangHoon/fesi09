// 문자열의 첫 글자를 대문자로 변환하고, 나머지는 소문자로 변환하는 함수
export function capitalize(str: string) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    throw new Error('Invalid input');
}

// 문자열을 지정된 길이로 자르고 말줄임표를 추가하는 함수
export function truncate(str: string, maxLength: number, suffix: string = '...') {
    if (!str) return "";
    if(str.length <= maxLength) return str;
    return str.slice(0, maxLength) + suffix;
}
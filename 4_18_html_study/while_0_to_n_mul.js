var n = prompt("0보다 큰 정수를 입력하세요", 0);
n = parseInt(n); //문자열 n 을 숫자로 바꿈

var i = 0, sum = 0;
while(i<=n) {
    sum += i;
    i++;
}
document.write("0에서" + n + "까지 합은" + sum);

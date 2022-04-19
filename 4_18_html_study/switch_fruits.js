var fruits = prompt("바나나, 사과, 체리중에 고르세요");
switch(fruits){
    case "바나나":
        price = 200;
        document.write(fruits + "를" + price + "에 팝니다");
        break;
    case "사과":
        price = 300;
        document.write(fruits + "를" + price + "에 팝니다");
        break;
    case "체리":
        price = 400; 
        document.write(fruits + "를" + price + "에 팝니다");
        break;
    default:
        document.write("팔지 않습니다.");
        price = 0;
}
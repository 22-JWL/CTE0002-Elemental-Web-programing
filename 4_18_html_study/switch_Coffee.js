var price = 0;
var coffee = prompt("무슨 커피 드릴까요?", "");
    switch(coffee){
        case "espresso" :
        case "에스프레소" : price =2000;
            break;
        case "카푸치노" : price = 3000;
        break;
        case "카페라떼" : price = 3500;
        break;
        default:
            document.write(coffee + "는 없습니다.");
    }
    if(price != 0)
        document.write(coffee + "는" + price + "원입니다.");
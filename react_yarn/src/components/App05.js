function App05()
{
    //undefined자체 return시 Error 발생
    //undefined = 변수에 어떤 자료형을 넣을지 알 수 없는 경우
    const name = undefined;
    
    // return name; 시 오류발생
    return name || "value가 undefined다.";

}

export default App05;
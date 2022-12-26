import { Component } from "react";

const arr = [10,20,30];
arr.map((x,index)=>console.log('[' +index + '번 방:' +x + ']'));

/*
    배열 = 10, 20, 30;

    배열.map(function(a){ //기본 문법
        return a+1
    })

    배열.map((a) =>{ //function 글자 생략 가능
        return a+1
    })

    배열.map((a)=> a+1) // 중괄호 안이 한줄짜리면 중괄호 생략 가능
                                         + 한줄이면 return 글자도  생략가능

    배열.map(a=> a+1) // 만약 (data , index, array) 파라미터를 하나만 쓰면
                                        파라미터 소괄호 ()도 생략가능
    
    배열.map(function(a){ //기본 문법
        return a+1
    })
    배열.map(a =>a+1) //바뀐 문법
*/ 

class MyComponents extends Component{
    // constructor(props){
    //     // 상태가 변하는 것에 대한 처리 state
    //     // function 타입 일 경우.. usestate라는 훅을 사용한다??
    //     this.state = {
    //         //상태변수 (sate variable)
    //         number : 0,
    //         // age : 10,
    //         // name : 'yeon'
    //     }
    // }
    state = {
        number : 0,
        message : '[helllllo message]',
        valdate : false,
        messages : ['Angular','Node','Vue','React','Ember']
    }

    render(){
        const {name,str} = this.props;

        const {message,number,valdate,messages} = this.state;
        return(
            <div>
                <h1>MyComponents View</h1>
                <h2>message {message}</h2>
                <h2>number {number}</h2>
                <h2>Array {messages}</h2>
                <h2>Array.map {messages.map(x=> '['+x + ']')}</h2>
                <h2>valdate {valdate}</h2>
                <h3>arr.map() 사용 | {arr.map((x,index)=>'[' +index + '번 방:' +x + ']')}</h3>
                <h1>{name} , {str}</h1>
            </div>
        )
    }
}

export default MyComponents;

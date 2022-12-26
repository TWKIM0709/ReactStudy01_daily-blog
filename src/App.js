//eslint-disable
import { useState } from 'react';
import './App.css';

let name = '김태우';
// let title = ['혜화 맛집 리스트','홍대 맛집 리스트' , '노량진 맛집 리스트'];

function App() {
    let [title,setTitle] =useState(['혜화 맛집 리스트','홍대 맛집 리스트' , '노량진 맛집 리스트']);
    let [like,setLike] = useState([0,0,0]);
    let [count,setCount] = useState(0);
  return (
    <div className="App">
        <div onClick={()=>{setCount(count+1);console.log(count)}}>안녕</div>
        <header>
            <div className='nav'>나의 소소한 일상 블로그</div>
            <p>'{name}'님 어서오세요</p>
            <a href='https://www.naver.com'  rel="noopener noreferrer" target='_blank'>네이버</a>
        </header>
        {title.map((data,index)=>
            <div key={index}>
                <div className='list'>
                <h4>{data}<span onClick={()=>{
                    let likearr = [...like];
                    likearr[index] = like[index]+1;
                    console.log(likearr)
                    setLike(likearr);
                }}>💚</span>
                {like[index]}</h4>
                <h5>2022.12.21</h5>
            </div>
            <hr/>
            </div>
        )}
    </div>
    
  );
}

export default App;


// 회원 1 : 회사 >> 사이트에 인재상 , 회사정보 입력해서 신청
// 회원 2 : 복지관
//              회사에서 올린 정보 보고 복지관의 사람이랑 연결 시켜줌
// 관리자 : 회사, 복지관 관리
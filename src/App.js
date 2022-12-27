//eslint-disable
import { useState } from 'react';
import './App.css';

let name = '김태우';
function App() {
    let [title,setTitle] =useState(['혜화 맛집 리스트','홍대 맛집 리스트' , '노량진 맛집 리스트']);
    let [publish,setPublish] =useState(['2022.10.27','2021.07.09' , '2022.01.03']);
    let [like,setLike] = useState([0,0,0]);
    let [count,setCount] = useState(0);
    let [flag,setFlag] = useState(false);
    let [modal,setModal] = useState(false);
    let [clickIndex, setClickIndex] = useState(9999);
    
function onoff(index){
    setClickIndex(index);
    if(index == clickIndex) setModal(!modal);
    else setModal((!modal) ? true : modal)
}

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
                <h4><span onClick={()=>{onoff(index);}}>{data}</span><span onClick={()=>{
                    let likearr = [...like];
                    likearr[index] = like[index]+1;
                    setLike(likearr);
                }}>💚</span>
                {like[index]}</h4>
                <h5>2022.12.21</h5>
            </div>
            <hr/>
            </div>
        )}{/* title.map end */}
        <p><button className='btn btn-secondary' id='titlebtn' onClick={()=>setTitle(['버거비' , '버거킹', '맘스터치'])}>Title Change</button></p>
        <p><button className='btn btn-secondary' id='titlebtn' onClick={()=>setTitle([...title].sort())}>Title Sort</button></p>
        
        {
            modal ? <MyModal title={title} publish={publish} clickIndex={clickIndex}/> : null
        }

        
    </div>
    
  );
}
function MyModal(props){
    return(
        <div>
            <h2>{props.title[props.clickIndex]}</h2>
            <p>{props.publish[props.clickIndex]}</p>
            <p>상세내용</p>
        </div>
    )
}
export default App;


// 회원 1 : 회사 >> 사이트에 인재상 , 회사정보 입력해서 신청
// 회원 2 : 복지관
//              회사에서 올린 정보 보고 복지관의 사람이랑 연결 시켜줌
// 관리자 : 회사, 복지관 관리
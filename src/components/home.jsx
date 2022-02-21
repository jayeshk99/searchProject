import axios from "axios";
import { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {searchSuccess} from "./../redux/actionTypes"

export const Home = ()=>{
    const data = useSelector((store)=>store)
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function getData(){
        axios.get(`http://localhost:3001/data?title=${text}`)
        .then((e)=>{
            e.json();
        }).then((data)=>{
            dispatch(searchSuccess(data))
        })
    }
    function handleEnter(e){
        if(e.key === 'Enter'){
            getData();
            window.location.href = `/search?q=${text}`
        }
    }
    return(
        <div className="home">
            <div className="logo"><img src="https://theredroadfoundation.org/wp-content/uploads/2021/06/Google-Logo.png" alt=""/></div>
            <div className="inputBox">
                <input type="text" className="search-box"
                    onInput={(e)=>{setText(e.target.value)}}
                    onKeyPress={(e)=>handleEnter(e)}
                /></div>
        </div>
    )
}
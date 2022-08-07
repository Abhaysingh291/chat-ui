import React, { useState } from 'react'
import './main.css';
import { contacts } from './datajson';
import { useRef } from 'react';
import Nav from './nav';

const Main = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [serachResult, setSearchResult] = useState([]);

    const inputEl = useRef("");

    const getSearchterm = () => {
        setSearchTerm(inputEl.current.value);

    }
    // console.log(searchTerm);
    const setres = () => {
        if (searchTerm !== '') {
            const newcontactList = contacts.filter((cont) => {
                // return Object.values(cont).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
                return cont.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            setSearchResult(newcontactList);
        }
        else {
            setSearchResult(contacts);
        }
    }
    return (
        <div className='all'>
            <Nav />
            <div className="main">
                <header className='header'>

                    <div className="msg"> Messages <h3 className="unread" style={{ position: "relative", fontSize: "1rem", height: "25px", top: '-25px', left: "98px", width: '23px', background: " rgb(239, 186, 86)", borderRadius: "50%" }}>2</h3></div>
                    <div ><i className="fa fa-search search" aria-hidden="true"></i><input className='Sright' type="search" placeholder='Search' onChange={() => { getSearchterm(); setres() }} ref={inputEl} />
                    </div>
                </header>
                <div className="outside">
                    {
                        searchTerm.length < 1 ?
                            contacts.map(data => (
                                <>
                                    <div div className="container" >
                                        <div >
                                            <img className="left" src={(data.image)} alt="Girl in a jacket" />
                                        </div>
                                        <div className="mid">
                                            <h2 style={{ position: "relative", top: "0", left: "-35px", fontFamily: "  'Kanit', sans-serif" }}> {data.name}</h2>
                                            <span style={{ position: "relative", top: "5px", left: "-20px" }}>{data.massage}</span>
                                        </div>
                                        <div className="right">
                                            <div className="time" style={{ color: "gray", position: "relative", top: '25px' }}>{data.time}</div>
                                            <h3 className="unread" style={{ position: "relative", top: '33px', left: "30px", width: '20px', background: "rgb(227, 239, 239)", borderRadius: "50%" }}>{data.unread}</h3>
                                        </div>
                                    </div>
                                    <hr style={{ margin: 0, padding: 0 }} />
                                </>
                            ))
                            : serachResult.length  >0 ?
                                serachResult.map(data => (
                                    <>
                                        <div div className="container" >
                                            <div >
                                                <img className="left" src={(data.image)} alt="Girl in a jacket" />
                                            </div>
                                            <div className="mid">
                                                <h2 style={{ position: "relative", top: "0", left: "-35px" }}> {data.name}</h2>
                                                <span style={{ position: "relative", top: "5px", left: "-20px" }}>{data.massage}</span>
                                            </div>
                                            <div className="right">
                                                <div className="time" style={{ position: "relative", top: '25px' }}>{data.time}</div>
                                                <h3 className="unread" style={{ position: "relative", top: '33px', left: "30px", width: '20px', background: "rgb(227, 239, 239)", borderRadius: "50%" }}>{data.unread}</h3>
                                            </div>
                                        </div>
                                        {/* {console.log(data.image)} */}
                                        <hr style={{ margin: 0, padding: 0 }} />
                                    </>
                                )) : <h1 style={{ border: "2px solid red", background: "white", color: "black" }}> User Not Found</h1>
                    }
                </div>
            </div>
        </div >
    )
}

export default Main;
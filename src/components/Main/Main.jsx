import React, { useContext } from 'react';
import "./Main.css"
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="usericon" />
        </div>

        <div className="main-container">

            {!showResult?<>

            
                <div className="greet">
                <p><span>Hello, Dev.</span></p> 
                <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="compass" />
                    </div>
                    <div className="card">
                        <p>Briefly summarixe this concept: urban plaining</p>
                        <img src={assets.bulb_icon} alt="bulb" />
                    </div><div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="message" />
                    </div><div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="code" />
                    </div>
                </div></>
            :<div className='result'>
              <div className="result-title">
                <img src={assets.user_icon} alt="user" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading?
                <div className="loader">
                   <hr />
                   <hr />
                   <hr />
                 

                </div>

                :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                

              </div>
             </div>}




            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a promt here' />
                    <div>
                    <img src={assets.gallery_icon} alt="gallery" />
                    <img src={assets.mic_icon} alt="gallery" />
                 {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="gallery" />:null}   
                    </div>
                </div>

                <p className='bottom-info'>Gemini may display inacurate info,including about people,so double-ckeck its responses.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Main

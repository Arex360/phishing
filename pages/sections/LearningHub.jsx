import { useState } from 'react'
import ReactPlayer from 'react-player'

let LearningHub = ()=>{
    let [video,SetVideo] = useState(false)
    return(
        <section className="text-gray-600 body-font h-screen overflow-scroll py-14 flex flex-col gap-5">
             <div className="row1 w-full bg-slate-200 shadow-md  p-5 mb-2 flex flex-col gap-2">
                <h1 className="text-3xl font-bold">PhishNode : Security Center Learning Hub</h1>
                <p>Learn how to safeguard organization across attack surfaces with <b>PhishCode Learning Hub</b></p>
                <hr />  
            </div>
            <div className="line bg-gray-400 w-11/12 mx-auto h-2">
                <div className="inner bg-gray-600 w-1/3 h-2"></div>
            </div>
            <div className="line  w-11/12 mx-auto flex justify-between">
                <div className="block1 w-1/3 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">Learning Path</h1>
                    <p>Accomplish security operation tasks with confidence and learn how to maximize protection across domains with curated collections of articles, videos, blogs and interactive guides</p>
                </div>
                <div className="block2 flex-auto">
                   {!video && 
                   <div className="grid grid-cols-3 gap-2">
                        <VideoCard onClick={()=>SetVideo(true)} num={1} title="What is phishing?"/>
                        <VideoCard onClick={()=>SetVideo(true)} num={2} title="How dangerous , phishing really is?"/>
                        <VideoCard onClick={()=>SetVideo(true)} num={3} title="What is phishCode?"/>
                        <VideoCard onClick={()=>SetVideo(true)} num={4} title="How to use PhishCode"/>
                        <VideoCard onClick={()=>SetVideo(true)} num={5} title="How to setup the environment"/>
                        <VideoCard onClick={()=>SetVideo(true)} num={6} title="How to launch Compaigns"/>
                    </div>
                   }
                   {video && 
                        <div className="videoplayer w-full h-10 flex justify-center">
                            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        </div>
                   }
                </div>
            </div>
        </section>
    )
}

let VideoCard = ({num,title, onClick})=>{
    return(
        <div onClick={onClick} className="videocard p-3 shadow-xl bg-white relative group cursor-pointer">
            <img src="https://imgur.com/ELiaCw7.png" className="absolute w-1/3 left-1/3 top-1/4 scale-50 opacity-0 hidden group-hover:block group-hover:opacity-70 duration-300" alt="" />
            <div className="row flex">
                <img src="https://imgur.com/ELiaCw7.png" className="absolute w-5 h-5top-4" alt="" />
                <img className="w-52" src="https://imgur.com/mNoYyda.png" alt="" />
                <h1 className="font-semibold">Video{num}</h1>
            </div>
            <div className="row font-bold">
                {title}
            </div>
        </div>
    )
}
export default LearningHub
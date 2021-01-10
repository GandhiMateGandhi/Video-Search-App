import VideoItem from "./VideoItem";


const VideoList = ({ videos }) => {
    const renderedList = videos.map(video => {
            return <VideoItem video={video}/>
        });

    return (
        <div className="ui relaxed divided list">
            {renderedList} {/*Each rendered video item*/}
        </div>
    )
}

export default VideoList;
import './index.css'
import ReactPlayer from 'react-player'

const Url = 'https://youtu.be/e3ew7YUeeQc'
const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url={Url} />
    </div>
  </div>
)

export default VideoPlayer

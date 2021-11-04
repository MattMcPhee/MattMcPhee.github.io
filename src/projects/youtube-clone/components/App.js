import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('buildings')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  // setSelectedVideo(response.data.items[0])

  return (
    <div className='container'>
      <SearchBar onFormSubmit={search}></SearchBar>

      <div className='row'>
        <div className='column'>
          <VideoDetail video={selectedVideo}></VideoDetail>
        </div>
        <div className='column'>
          <VideoList onVideoSelect={setSelectedVideo} videos={videos}></VideoList>
        </div>
      </div>
    </div>
  )
}

export default App

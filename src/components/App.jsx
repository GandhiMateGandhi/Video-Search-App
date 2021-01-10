import SearchBar from "./SearchBar";
import React from "react";
import youtubeAPI from "../api/youtubeAPI";
import VideoList from "./VideoList";

class App extends React.Component {

    state = { videos: [] }

    onSearchSubmit = async video => {
        const response = await youtubeAPI.get('/search/', {
            params: {
                q: video
            }
        })
        this.setState({ videos: response.data.items })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '15px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;
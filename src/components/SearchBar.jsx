import React from 'react';

class SearchBar extends React.Component {
    state = { video: ''};

    onSearchBarChange = (e) => {
        this.setState({video: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.video)
    }

    render(){
        return (
            <div className="SearchBar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="Field">
                        <label htmlFor="searchBar">Video Search</label>
                        <input 
                            onChange={this.onSearchBarChange}
                            value={this.state.video}
                            type="text"
                            id="searchBar"/>
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar;
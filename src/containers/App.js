import React, { Component } from 'react';
import {connect} from 'react-redux';
import {User} from '../components/User';
import {Page} from '../components/Page';
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'

import './App.css';

class App extends Component {
    render() {
        const { user, page, getPhotos, handleLogin } = this.props;
        return (
            <div className="app">
                <Page
                    photos={page.photos}
                    year={page.year}
                    isFetching={page.isFetching}
                    getPhotos={getPhotos}
                />
                {/* добавили новые props для User */}
                <User
                    name={user.name}
                    isFetching={user.isFetching}
                    error={user.error}
                    handleLogin={handleLogin}
                />
            </div>
        )
    }
}

const mapStateToProps = store => ({
    user: store.user,
    page: store.page,
});

const mapDispatchToProps = dispatch => ({
    getPhotos: year => dispatch(getPhotos(year)),
    handleLogin: () => dispatch(handleLogin()),
});

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);
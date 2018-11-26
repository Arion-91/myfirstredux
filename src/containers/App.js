import React, { Component } from 'react';
import {connect} from 'react-redux';
import {User} from '../components/User';
import {Page} from '../components/Page';
import { setYear } from '../actions/PageActions'

import './App.css';

class App extends Component {
    render() {
        const { user, page, setYear } = this.props;
        return (
            <div className="app">
                <header className="app-header">
                    <h1 className="app-title">Мой топ фото</h1>
                </header>
                <User name={user.name} />
                <Page photos={page.photos} year={page.year} setYear={setYear}/>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    user: store.user,
    page: store.page,
});

const mapDispatchToProps = dispatch => ({
    setYear: year => dispatch(setYear(year))
});

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);
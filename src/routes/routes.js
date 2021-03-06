//react 4.0改用react-router-dom
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import Bundle from '../components/Bundle'
// 利用高阶组件bundle-loader实现按需加载
import loadHome from 'bundle-loader?lazy!../containers/Home.js';
import loadNews from 'bundle-loader?lazy!../containers/News.js';
import React, {
    Component
} from 'react';

// 利用高阶组件Bundle实现按需加载

const Home = () => (
    <Bundle load={loadHome}>    
          {(Home) => <Home  />}      
     </Bundle>
)
const News = () => (
    <Bundle load={loadNews}>    
        {(News) => <News />}      
     </Bundle>
)
export default class Routes extends Component {

    render() {
        return (
            // Router 下只能包一个子元素
            <Router>  
                       <div>
                            <Route  path='/home' component={Home}></Route>
                            <Route path='/news' component={News}></Route>
                        </div>
            </Router>

        )

    }
}
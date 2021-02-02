import React, { Component } from 'react'
import Menu from './Menu'

class Home extends Component {
    render() {
        // 实际上 this.props.match.path 就是 location.pathname 的值
        let path = this.props.match.path
        console.log('path in home', path)
        return (
            <div>
                {/*Home 组件中渲染 Menu 组件*/}
                <Menu path={path}/>
                点击上面的链接
            </div>
        )
    }
}

export default Home

import React, { Component } from 'react'

class Fu extends Component {
    constructor(props) {
        super(props)
    }
    tsxn = (dataFromZi) => {
        // dataFromZi 实际上就是 propsClick 的参数, 也就是 name 变量的值
        console.log('data from zi', dataFromZi)
    }
    render() {
        return (
            <div>
                <span>从子组件拿到数据</span>
                <Zi onClick={this.tsxn}/>
            </div>
        )
    }
}

class Zi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zi_name: 'xiao gua',
        }
    }
    onClick = () => {
        let propsClick = this.props.onClick
        // console.log('props click', typeof propsClick)
        if (typeof propsClick === 'function') {
            let name = this.state.zi_name
            propsClick(name)
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.onClick}>click</button>
                { this.state.zi_name }
            </div>
        )
    }
}

export default Fu

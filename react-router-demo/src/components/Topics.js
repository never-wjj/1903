import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import Topic from "./Topic"
class Users extends Component {
  // 子路由里面的地址必须由 父路由的地址开头
  // 如何在 react 组件内获取路由地址的相关信息
  // 当一个组件被当做了路由组件  （该组件用 Route 组件包裹了），该组件默认会接收一些 props
  // props 内
  // 1. history
  // 2. location
  // 3. match   match 下的 url 给 link 用      path 给 Route path 使用
  render() {
    const { match } = this.props
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/hot`}>热门</Link>
          </li>
          <li>
            <Link to={`${match.url}/new`}>最新</Link>
          </li>
          <li>
            <Link to={`${match.url}/hottest`}>热榜</Link>
          </li>
        </ul>
        {/* 设置动态路由 */}
        {/* render 属性的作用是类似  component  */}
        <Route path={`${match.path}`} exact render={() => <div>请选择</div>} />
        <Route path={`${match.path}/:id`} component={Topic} />
      </div>
    )
  }
}
export default Users

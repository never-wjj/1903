import React, { Component } from "react"
import axios from "axios"
class ContentList extends Component {
  state = {
    list: [],
    pageNum: 0,
    showLoading: false
  }
  componentDidMount() {
    const { type } = this.props.match.params
    console.log(type)
    axios
      .get(`/api/article/${type === "index" ? "list" : "listproject"}/0/json`)
      .then(res => {
        this.setState({
          list: res.data.data.datas
        })
      })
    window.onscroll = () => {
      // 获取滚动条距离底部的距离
      // 顶部的距离
      // console.log(window.scrollY)
      // 整个文档的高度
      // console.log(document.querySelector("body").clientHeight)
      // 窗口的高度
      // console.log(window.innerHeight)
      if (
        document.querySelector("body").clientHeight -
          window.scrollY -
          window.innerHeight <
        20
      ) {
        if (this.state.showLoading === false) {
          this.setState({
            pageNum: this.state.pageNum + 1,
            showLoading: true
          })
        }
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNum !== this.state.pageNum) {
      const { type } = this.props.match.params
      const { pageNum, list } = this.state
      axios
        .get(
          `/api/article/${
            type === "index" ? "list" : "listproject"
          }/${pageNum}/json`
        )
        .then(res => {
          setTimeout(() => {
            this.setState({
              list: [...list, ...res.data.data.datas],
              showLoading: false
            })
          }, 1000)
        })
    }
  }
  render() {
    const { list, pageNum, showLoading } = this.state
    console.log(pageNum)
    const contentList = list.length ? (
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    ) : (
      "请稍等"
    )
    return (
      <div>
        {contentList}
        <div style={{ display: showLoading ? "block" : "none" }}>
          加载中......
        </div>
      </div>
    )
  }
}
export default ContentList

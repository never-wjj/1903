import React, { Component } from "react"
import PostBody from "./PostBody"
import PostComment from "./PostComment"
import Axios from "axios"
import { connect } from "react-redux"
import { getComments } from "../store/actions"
class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    const { id } = this.props.match.params
    Axios.get(`http://localhost:3008/posts/${id}`).then(res => {
      this.setState({
        post: res.data
      })
    })
    this.props.getComments(id)
  }
  render() {
    const { post } = this.state
    const { comments } = this.props
    const { id } = this.props.match.params
    return (
      <div>
        <PostBody post={post} comments={comments} />
        <PostComment comments={comments} postId={id} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}
export default connect(
  mapStateToProps,
  { getComments }
)(Post)

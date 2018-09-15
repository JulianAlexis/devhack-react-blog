import React, { Component } from 'react';
import './post.css';
import { getPost } from '../utils/api';
import { connect } from 'react-redux';
import * as singlePostActions from '../actions/singlePostActions';

// Consumir API para traer el detalle del post https://jsonplaceholder.typicode.com/posts/:id
class Post extends Component {

  componentDidMount() {

    this.props.getFetch(`/posts/${id}`, 'get');

    // this.props.requestSinglePost({
    //   title:'Desde el action',
    //   body:'Con redux'
    // });

    const id = this.props.match.params.id;
  }

  render() {
    const { title, body } = this.props.post;
    return (
      <div className="post-detail">
        <h1> {title} </h1>
        <p> {body} </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    post: state.singlePostReducer.post,
    loading: state.singlePostReducer.loading,
  }
}

export default connect(
  mapStateToProps, 
  singlePostActions
)(Post);

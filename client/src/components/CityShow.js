import React, { Component } from 'react'
import { ViewPicsContainer, NavDiv, CityInfoContainer, CityShowContainer, CityImageCenteringContainer } from './styled-components/Containers'
import { CityShowImage, LogoImage } from './styled-components/Images'
import { CityInfo, Href } from './styled-components/Text'
import { FormButton } from './styled-components/Form'
import NewPost from './NewPost'
import PostList from './PostList'
import axios from 'axios'

class CityShow extends Component {

    state = {
        city: {},
        posts: [
        {
            city: "London", 
            user: "Ninti", 
            title: "Nice City", 
            content: "This is an nice city", 
            picture: "https://i.imgur.com/Iv70Ed1.png"
        },
        {
            city: "London", 
            user: "Ninti", 
            title: "Nice City", 
            content: "This is an nice city", 
            picture: "https://i.imgur.com/Iv70Ed1.png"
        },
        {
            city: "London", 
            user: "Ninti", 
            title: "Nice City", 
            content: "This is an nice city", 
            picture: "https://i.imgur.com/Iv70Ed1.png"
        }
        ],
        showPostFormState: false,
        showEditFormState: false,
        viewPostGallery: false
    }
    
    showEditForm = ()=>{
        if (this.state.showEditFormState === false){
            this.setState({showEditFormState: true})
        } else{
            this.setState({showEditFormState: false})
        }
    }
    showPostForm = ()=> {   
        if (this.state.showPostFormState === false){
            this.setState({showPostFormState: true})
        } else{
            this.setState({showPostFormState: false})
        }  
    }

    viewPostGallery = () => {
        this.setState({viewPostGallery: true})
    }
    hidePostGallery = () => {
        this.setState({viewPostGallery: false})
    }
    
    getPosts = () => {
        axios.get(`/api/cities/${this.props.match.params.id}/posts`)
        .then((res) => {this.setState({posts: res.data})})
    }
    
 
  async createPost(newPost){
      try{
          const res = await axios.post(`/api/cities/${this.props.match.params.id}/posts`)
          newPost = res.data
          const updatedPosts = [...this.state.posts]
          this.setState({posts: updatedPosts})
      }
      catch(err){
          console.log(err)
      }
  }
    addNewPost = async (newPost) => {
        try{
           await this.createPost(newPost)
           const posts = [...this.state.posts]
           posts.push(newPost)
           this.setState({ posts })   
           this.showPostForm() 
        }
        catch(err){
            console.log(err)
        }
    }

    getCityInfo = () => {
        console.log(this.props.match.params.id)
        axios.get(`/api/cities/${this.props.match.params.id}`)
        .then((res) => {this.setState({city: res.data})})
    }

   deletePost(cityId, postId) {
        axios.delete(`/api/cities/${cityId}/posts/${postId}`)
        .then(this.getPosts)
        
    }

     


    componentWillMount(){
        this.getPosts()
        this.getCityInfo()
        console.log(this.props)
    }
    render(){
    return (
        <CityShowContainer>
                <NavDiv>
                <a href="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></a>
    
            
            <Href>
                <a href="#">Sign Up</a>
                <a href="/login">Login</a>
            </Href>
                </NavDiv>
                <CityImageCenteringContainer>
                    <CityShowImage src={this.state.city.picture} alt={this.state.city.name}/>
                </CityImageCenteringContainer>
                <CityInfoContainer>
                    <CityInfo><h1>Hello From... </h1></CityInfo>
                    <CityInfo><FormButton onClick= {() => this.showPostForm()}>(+) Post</FormButton></CityInfo>
                    <hr/>
                    <NewPost showPostFormState = {this.state.showPostFormState} showPostForm = {this.showPostForm} city_id ={this.props.match.params.id} 
                    getPosts = {this.getPosts}/>
                    <ViewPicsContainer>
                    <FormButton onClick={()=>this.viewPostGallery()}>City Pics</FormButton>
                    <FormButton onClick={()=>this.hidePostGallery()}>-</FormButton>
                    </ViewPicsContainer>
                    <PostList showEditFormState = {this.state.showEditFormState} showEditForm = {this.showEditForm} viewPostGallery={this.state.viewPostGallery} posts = {this.state.posts} deletePost = {this.deletePost}/>
                </CityInfoContainer>
        </CityShowContainer>
    )
    }
}

export default CityShow
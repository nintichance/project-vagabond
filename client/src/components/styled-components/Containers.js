import styled from 'styled-components'

export const HomeContainer = styled.div`
    background-color: #1b1b1b;
`

export const CityIndexContainer = styled.div `
    display: flex;
    flex-wrap: wrap;

`
export const PhotoCenteringContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`
export const PhotoHeaderContainer = styled.div`
    position: absolute;
    z-index: +1;
    
`

export const SplashImageContainer = PhotoCenteringContainer.extend`
    font-size: 10em;
    color: white;
    font-family: 'Raleway', sans-serif;
    text-shadow: 1px 1px rgba(0,0,0, 0.50);  

`

export const CityContainer = PhotoCenteringContainer.extend`
    font-size: 4.75em;
    color: white;
    border: solid 1px white;
    text-shadow: 1px 1px rgba(0,0,0, 0.50);   
`

export const TaglineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    height: 30vh;
    color: white;
`

export const CityHeaderContainer = PhotoHeaderContainer.extend`
a {
    text-decoration: none;
    color: white;
}

`

export const SplashHeaderContainer = PhotoHeaderContainer.extend`

    
`

export const CityInfoContainer = styled.div`
    width: 45vw;
    // background-color: #1b1b1b;
    @media only screen and (min-width: 900px){
        margin-top: 20vh;
    }

    @media only screen and (max-width: 900px){
        flex-direction: column;
        width:65vw;
    }
  
`

export const CityShowContainer = styled.div`
    display: flex;
    background-color: white;
    @media only screen and (max-width: 900px){
        flex-direction: column;
        align-items: center;
    }

`
export const CityImageCenteringContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    background-attachment: fixed;

    @media only screen and (min-width: 900px){
        height: 100vh;
        margin-right: 30px;
    }
    @media only screen and (max-width: 900px){
       width: 100vw;
    }
`

export const PostHeaderContainer = styled.div`
    display: flex;
`
export const GenericFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #1b1b1b;
    background: url("http://www.unit2fitness.com/wp-content/uploads/2013/01/Graffiti-Wallpaper-027.jpg");
`
export const TrashAndEditIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavDiv = styled.div`
width: 100vw;
position: fixed;        
color: rgb(0, 0, 0);
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 7vh;
margin-bottom: 25px;
background-color: #1b1b1b;
a{
    text-decoration: none;
    color: white;
    margin: 10px;
    margin-right: 20px;
    font-size: 1.25em;
    text-shadow: 1px 1px rgba(0,0,0, 0.1);
}
`
export const ViewPicsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const LogOutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export default { 
    HomeContainer, 
    SplashImageContainer, 
    SplashHeaderContainer, 
    PhotoCenteringContainer, 
    PhotoHeaderContainer, 
    CityIndexContainer, 
    CityHeaderContainer, 
    TaglineContainer,
    CityInfoContainer,
    CityShowContainer,
    CityImageCenteringContainer,
    PostHeaderContainer,
    GenericFormContainer,
    TrashAndEditIconsContainer,
    ViewPicsContainer,
    LogOutContainer
 }
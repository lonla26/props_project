import './App.css';
import Profile from './profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaveBar from './components/NaveBar';

function App() {
  const profileElements =
  {
    fullName:"MOFFO LONLA CEDRIC",
    bio:"I falled in love with software development and I'm ready to tackle new challenges",
    profession:"Software Engineer",
    imgSrc:"/my_profile_pic.jpeg",
    handleName:()=>{alert(`${profileElements.fullName}`)},
  }

  return (
    <div className="App">
      <NaveBar login={profileElements.fullName}/>
      <h1>Welcome</h1>
      <Profile data={profileElements} handleName={profileElements.handleName}><img src={profileElements.imgSrc} alt="Profile pic"/></Profile>
    </div >
  );
}

export default App;

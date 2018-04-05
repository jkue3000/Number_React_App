import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Characters from "./components/Characters";
import images from "./images.json"

class App extends Component {

  state = {
    message: "Count One Through Sixteen and You Might Win.... ",
    userHighScore: 0,
    userScore: 0,
    images: images,
    notChosenPic: images
  }

  randomPics = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * ( i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  };

  selectPhoto = character => {
    const findCharacter = this.state.notChosenPic.find(item => item.character === character);

    if (findCharacter === undefined) {
      this.setState({
        message: "Really. You just lost :(",
        userHighScore: (this.state.userScore > this.state.userHighScore) ? this.state.userScore : this.state.userHighScore,
        userScore: 0,
        images: images,
        notChosenPic: images
      });
    } else {
      const findNewCharacter = this.state.notChosenPic.filter(item => item.character !== character);
      this.setState({
        message: "You just passed to the next grade :D",
        userScore: this.state.userScore + 1,
        images: images,
        notChosenPic: findNewCharacter
      });
  } 
  this.randomPics(images);
  }

  render() {
    return (
      <Wrapper>
        <Navbar
        message = { this.state.message }
        userScore = { this.state.userScore }
        userHighScore = { this.state.userHighScore }
        />
        <Title />
        {
          this.state.images.map(item => (
            <Characters
              character = { item.character }
              photo = { item.image }
              selectPhoto = { this.selectPhoto }
              userScore = { this.state.userScore }
            />
          ))
        }
      </Wrapper>
    )
  }
}

export default App;
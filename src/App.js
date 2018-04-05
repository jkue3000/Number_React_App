import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Characters from "./components/Characters";
import images from "./images.json"

class App extends Component {

  state = {
    message: "Chose a Number only once to win.",
    highScore: 0,
    currentScore: 0,
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
        message: "Incorrect Guess!",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        images: images,
        notChosenPic: images
      });
    } else {
      const findNewCharacter = this.state.notChosenPic.filter(item => item.character !== character);
      this.setState({
        message: "Correct Guess!",
        currentScore: this.state.currentScore + 1,
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
        currentScore = { this.state.currentScore }
        highScore = { this.state.highScore }
        />
        <Title />
        {
          this.state.images.map(item => (
            <Characters
              character = { item.character }
              photo = { item.image }
              selectPhoto = { this.selectPhoto }
              currentScore = { this.state.currentScore }
            />
          ))
        }
      </Wrapper>
    )
  }
}

export default App;
import React, { Component } from 'react';
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Numbercard from "./components/Numbercard";
import images from "./images.json"

class App extends Component {

  state = {
    message: "Count One Through Sixteen and You Might Win.... ",
    userHighScore: 0,
    userScore: 0,
    images: images,
    notChosenPic: images
  }
t
  randomPics = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * ( i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  };

  selectPhoto = number => {
    const findNumber = this.state.notChosenPic.find(item => item.number === number);

    if (findNumber === undefined) {
      this.setState({
        message: "Really. You just lost :(",
        userHighScore: (this.state.userScore > this.state.userHighScore) ? this.state.userScore : this.state.userHighScore,
        userScore: 0,
        images: images,
        notChosenPic: images
      });
    } else {
      const findNewNumber = this.state.notChosenPic.filter(item => item.number !== number);
      this.setState({
        message: "You just passed to the next grade :D",
        userScore: this.state.userScore + 1,
        images: images,
        notChosenPic: findNewNumber
      });
  } 
  this.randomPics(images);
  }

  render() {
    return (
      <Wrapper>
        <Nav
        message = { this.state.message }
        userScore = { this.state.userScore }
        userHighScore = { this.state.userHighScore }
        />
        <Title />
        {
          this.state.images.map(item => (
            <Numbercard
              number = { item.number }
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
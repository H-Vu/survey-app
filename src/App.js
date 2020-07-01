import React from "react";

import Items from "./Components/Items";
import styled from "styled-components";

import "./App.css";

const Input = styled.input`
  display: inline-block;
  background-color: #f8c291;
  border: none;
  color: black;
  font-size: 1.6rem;
  outline: none;
  padding: 5px;
  font-size: 1.2em;
  font-family: Courier New;
  font-weight: bold;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  background-color: #3c6382;
  color: #f8c291;
  padding: 5px;
  font-size: 1.2em;
  font-family: Courier New;
  font-weight: bold;
  width: 100px;
  margin-left: 10px;
`;

const ButtonBot = styled.button`
  display: inline-block;
  border: none;
  background-color: #e58e26;
  color: #3c6382;
  padding: 5px;
  font-size: 1.2em;
  font-family: Courier New;
  font-weight: bold;
  width: 200px;
  margin-left: 10px;
`;

class App extends React.Component {
  state = {
    text: "",
    items: [],
    hidden: false,
  };

  inputHandle = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  addHandle = (id) => {
    if (this.state.hidden === false) {
      this.setState({
        items: [
          ...this.state.items,
          {
            theText: this.state.text,
            theCheck: false,
            theID: id,
            theVote: 0,
          },
        ],
      });
    }
  };

  selectedHandle = (id) => {
    console.log(id);
    this.setState({
      items: this.state.items.map((item) => {
        if (id !== item.theID) {
          return {
            theText: item.theText,
            theCheck: false,
            theID: item.theID,
            theVote: item.theVote,
          };
        }
        return {
          theText: item.theText,
          theCheck: true,
          theID: item.theID,
          theVote: item.theVote,
        };
      }),
    });
  };

  voteHandle = () => {
    if (this.state.hidden === false) {
      this.setState({
        items: this.state.items.map((item) => {
          if (item.theCheck === true) {
            return {
              theText: item.theText,
              theCheck: item.theCheck,
              theID: item.theID,
              theVote: item.theVote + 1,
            };
          }
          return {
            theText: item.theText,
            theCheck: item.theCheck,
            theID: item.theID,
            theVote: item.theVote,
          };
        }),
        hidden: true,
      });
    }
  };

  continueHandle = () => {
    this.setState({
      hidden: false,
    });
  };

  id = 0;
  render() {
    // this.id++;
    return (
      <div className="App">
        <div>
          <Input onChange={(e) => this.inputHandle(e)} />
          <Button onClick={() => this.addHandle(this.id++)}>Add</Button>
        </div>
        <Items
          items={this.state.items}
          selected={this.selectedHandle}
          hidden={this.state.hidden}
        />
        {this.state.items.length > 1 ? (
          <div>
            <ButtonBot onClick={this.voteHandle}>Vote</ButtonBot>
            <ButtonBot onClick={this.continueHandle}>Continue</ButtonBot>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

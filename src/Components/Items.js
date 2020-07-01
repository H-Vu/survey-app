import React from "react";

import styled from "styled-components";

const Frame = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 99%;
  padding: 5px 5px 5px 5px;
  font-size: 1.2em;
  font-family: Courier New;
  font-weight: bold;
`;

const Div = styled.div`
  background-color: #f7f1e3;
  width: 50vw;
  margin-left: 25vw;
`;

export default function Items(props) {
  function onChangeHandle(id) {
    props.selected(id);
  }

  return (
    <Div>
      {!props.hidden
        ? props.items.map((item) => {
            return (
              <Frame key={item.theID}>
                <input
                  type="radio"
                  checked={item.theCheck}
                  value={item.theText}
                  onChange={() => onChangeHandle(item.theID)}
                />
                {item.theText}
              </Frame>
            );
          })
        : props.items.map((item) => {
            return (
              <div key={item.theID}>
                <Frame>
                  <span style={{ float: "left" }}>Item: {item.theText}</span>
                  <span style={{ float: "right" }}>
                    Number of votes: {item.theVote}
                  </span>
                  <br />
                </Frame>
              </div>
            );
          })}
    </Div>
  );
}

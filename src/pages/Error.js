import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const Error = () => {
  return (
    <Wrapper>
      <div>
        <h2>404</h2>
        <h3>Oops, something went wrong...</h3>
        <Link className="back" to="/">
          <BsArrowLeft className="arr" /> Back Home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: calc(100vh - 67px);
  text-align: center;
  div {
    margin-bottom: 15rem;
  }
  h2 {
    font-size: 8rem;
  }
  h3 {
    font-size: 2.5rem;
  }
  .back {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 120px;
    background: var(--elements);
    box-shadow: 0px 0px 5px 1px var(--shadow);
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin-top: 1rem;
    .arr {
      font-size: 1.9rem;
    }
  }
  @media (min-width: 768px) {
    .back {
      width: 220px;
      padding: 0.7rem 0;
      font-size: 3rem;
      .arr {
        font-size: 4rem;
      }
    }
    h2 {
      font-size: 15rem;
    }
    h3 {
      font-size: 5rem;
    }
  }
`;

export default Error;

import { Link } from "react-router-dom";
import React from "react";
import { HiOutlineMoon, HiSun } from "react-icons/hi";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setTheme, theme } = useGlobalContext();
  return (
    <Wrapper>
      <div className="center">
        <Link className="home" to="/">
          Where in the world?
        </Link>
        <button
          onClick={() =>
            theme === "light-theme"
              ? setTheme("dark-theme")
              : setTheme("light-theme")
          }
          className="mode"
        >
          {theme === "light-theme" ? (
            <>
              <HiOutlineMoon />
              Dark Mode
            </>
          ) : (
            <>
              <HiSun />
              Light Mode
            </>
          )}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 2.5rem 0;
  box-shadow: 0px 0px 5px 1px var(--shadow);
  background: var(--elements);
  .center {
    display: flex;
    justify-content: space-between;
    .home {
      font-weight: 800;
    }
  }
  .mode {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--text);
  }
  @media (min-width: 768px) {
    padding: 2rem 0;
    .center {
      .home {
        font-size: 2rem;
      }
    }
    .mode {
      font-size: 1.5rem;
    }
  }
`;

export default Navbar;

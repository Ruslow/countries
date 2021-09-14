import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { AiOutlineSearch } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
const Flags = () => {
  const { loading, items, setQuery, error, reg, setReg } = useGlobalContext();
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  return (
    <Wrapper>
      <section className="center">
        <div className="search">
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="input">
              <AiOutlineSearch className="ic" />
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                type="text"
                placeholder="Search for a country..."
              />
            </form>
            {error.show && <p className="error">{error.msg}</p>}
          </div>

          <Select
            placeholder="Filter by Region"
            theme={(theme) => ({
              ...theme,
              borderRadius: `5px`,
              colors: {
                ...theme.colors,
                primary: `var(--input)`,
                primary25: `var(--input)`,
                primary50: `var(--elements)`,
                primary75: `var(--elements)`,
                neutral0: `var(--elements)`,
                neutral15: `var(--text)`,
                neutral20: `var(--shadow)`,
                neutral30: `var(--input)`,
                neutral40: `var(--text)`,
                neutral50: `var(--input)`,
                neutral60: `var(--text)`,
                neutral70: `var(--text)`,
                neutral80: `var(--text)`,
                neutral90: `var(--text)`,
              },
            })}
            className="sel"
            name="filter"
            id="filter"
            options={options}
            onChange={(e) => {
              setReg(e.value);
            }}
          ></Select>
        </div>

        {loading ? (
          <div className="loading"></div>
        ) : (
          <section className="flags">
            {reg
              ? items
                  .filter((item) => {
                    return item.region === `${reg}`;
                  })
                  .map((item) => {
                    const { area, flag, name, region, population, capital } =
                      item;
                    return (
                      <Link to={`countries/${name}`}>
                        <article className="flag" key={area}>
                          <img src={flag} alt={name} />
                          <div className="footer">
                            <h2>{name}</h2>
                            <div className="footer-data">
                              <h4>
                                Population: <span> {population} </span>
                              </h4>
                              <h4>
                                Region:
                                <span> {region}</span>
                              </h4>
                              <h4>
                                Capital:
                                <span> {capital}</span>
                              </h4>
                            </div>
                          </div>
                        </article>
                      </Link>
                    );
                  })
              : items.map((item) => {
                  const { area, flag, name, region, population, capital } =
                    item;
                  return (
                    <Link to={`countries/${name}`}>
                      <article className="flag" key={area}>
                        <img src={flag} alt={name} />
                        <div className="footer">
                          <h2>{name}</h2>
                          <div className="footer-data">
                            <h4>
                              Population: <span> {population} </span>
                            </h4>
                            <h4>
                              Region:
                              <span> {region}</span>
                            </h4>
                            <h4>
                              Capital:
                              <span> {capital}</span>
                            </h4>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
          </section>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 2rem 0;

  .search {
    margin-bottom: 4rem;
    .input {
      border-radius: 5px;
      background: var(--elements);
      width: 100%;
      box-shadow: 0px 0px 5px 1px var(--shadow);
      padding: 1rem 3rem;
      color: var(--input);
      display: flex;
      gap: 2rem;
      margin-bottom: 3rem;
      transition: 0.5s;
      &:hover {
        box-shadow: 0px 0px 5px 5px var(--shadow);
      }
      .ic {
        font-size: 1.8rem;
      }
      input {
        background: transparent;
        border: none;
        outline: none;
        width: 100%;
      }
    }
  }
  .sel {
    width: 50%;
    font-weight: 600;
  }
  .flags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    font-size: 1.1rem;
    .flag {
      border-radius: 5px;
      background: var(--elements);
      overflow: hidden;
      width: 232px;
      box-shadow: 0px 0px 5px 1px var(--shadow);
      img {
        height: 150px;
        object-fit: cover;
      }
      .footer {
        padding: 1rem 2rem;
        span {
          font-weight: 600;
        }
        h2 {
          margin-bottom: 1rem;
        }
        .footer-data {
          line-height: 1.8;
        }
      }
      transition: 0.5s;
      &:hover {
        box-shadow: 0px 0px 5px 5px var(--shadow);
        cursor: pointer;
      }
    }
  }
  @media (min-width: 768px) {
    padding: 4.5rem 0;
    .search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .input {
        width: 400px;
        margin: 0;
      }
      .sel {
        width: 150px;
      }
    }
    .flags {
      justify-content: flex-start;
    }
  }
`;
export default Flags;

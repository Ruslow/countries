import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";
const url = `https://restcountries.eu/rest/v2/name/`;
const SingleFlag = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [singleFlag, setSingleFlag] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function getFlag() {
      try {
        const response = await fetch(`${url}${name}`);
        const data = await response.json();
        if (data.status !== 404) {
          setSingleFlag(data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getFlag();
  }, [name]);
  if (loading) {
    return <div className="loading"></div>;
  }
  if (!singleFlag) {
    return <h2>no country to display</h2>;
  }
  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag,
    name: countryName,
  } = singleFlag[0];

  return (
    <Wrapper>
      <section className="center">
        <Link className="back" to="/">
          <BsArrowLeft className="arr" /> Back
        </Link>
        <article>
          <img src={flag} alt={nativeName} />
          <div className="text">
            <h2>{countryName}</h2>
            <div className="flex">
              <div className="top">
                <h3>
                  Native Name:
                  <span> {nativeName}</span>
                </h3>
                <h3>
                  Population:
                  <span> {population}</span>
                </h3>
                <h3>
                  Region:
                  <span> {region}</span>
                </h3>
                <h3>
                  Sub Region:
                  <span> {subregion}</span>
                </h3>
                <h3>
                  Capital:
                  <span> {capital}</span>
                </h3>
              </div>
              <div className="bottom">
                <h3>
                  Top Level Domain:
                  <span> {topLevelDomain}</span>
                </h3>
                <h3>
                  Currencies:
                  {currencies.map((cur) => {
                    const { name } = cur;
                    return <span> {name}</span>;
                  })}
                </h3>
                <h3>
                  Languages:
                  {languages.map((lang) => {
                    const { name } = lang;
                    return <span> {name}</span>;
                  })}
                </h3>
              </div>
            </div>
            <div className="border">
              <h3>Border Countries:</h3>
              {borders.length === 0 ? (
                <h3>there's no border country</h3>
              ) : (
                <div className="bord">
                  {borders.map((bor) => {
                    return <h4 className="back">{bor}</h4>;
                  })}
                </div>
              )}
            </div>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 3rem 0;

  img {
    margin-top: 5rem;
  }
  h2 {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .top {
    line-height: 2.1;
  }
  span {
    font-weight: 300;
  }
  h3 {
    font-weight: 600;
  }
  .bottom {
    margin-top: 3.5rem;
    line-height: 2.1;
  }
  .border {
    margin-top: 2rem;
  }
  .back {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 90px;
    background: var(--elements);
    box-shadow: 0px 0px 5px 1px var(--shadow);
    .arr {
      font-size: 1.9rem;
    }
  }
  .bord {
    display: flex;
    gap: 15px 10px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }
  @media (min-width: 900px) {
    padding: 6rem 0;
    .back {
      width: 110px;
      padding: 0.7rem 0;
    }
    h2 {
      font-size: 3rem;
    }
    article {
      display: flex;
      gap: 100px;
      .text {
        align-self: flex-end;
      }
      .flex {
        display: flex;
        gap: 0 180px;
        flex-wrap: wrap;

        .bottom {
          align-self: flex-start;
          margin-top: 0;
        }
      }
      img {
        width: 450px;
        height: 300px;
        margin-top: 6.5rem;
      }
    }
  }
`;

export default SingleFlag;

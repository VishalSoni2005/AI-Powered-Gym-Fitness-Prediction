"use client";
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="box-of-star1">
          <div className="star star-position1" />
          <div className="star star-position2" />
          <div className="star star-position3" />
          <div className="star star-position4" />
          <div className="star star-position5" />
          <div className="star star-position6" />
          <div className="star star-position7" />
        </div>
        <div className="box-of-star2">
          <div className="star star-position1" />
          <div className="star star-position2" />
          <div className="star star-position3" />
          <div className="star star-position4" />
          <div className="star star-position5" />
          <div className="star star-position6" />
          <div className="star star-position7" />
        </div>
        <div className="box-of-star3">
          <div className="star star-position1" />
          <div className="star star-position2" />
          <div className="star star-position3" />
          <div className="star star-position4" />
          <div className="star star-position5" />
          <div className="star star-position6" />
          <div className="star star-position7" />
        </div>
        <div className="box-of-star4">
          <div className="star star-position1" />
          <div className="star star-position2" />
          <div className="star star-position3" />
          <div className="star star-position4" />
          <div className="star star-position5" />
          <div className="star star-position6" />
          <div className="star star-position7" />
        </div>
        <div data-js="astro" className="astronaut">
          <div className="head" />
          <div className="arm arm-left" />
          <div className="arm arm-right" />
          <div className="body">
            <div className="panel" />
          </div>
          <div className="leg leg-left" />
          <div className="leg leg-right" />
          <div className="schoolbag" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @keyframes snow {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }

    20% {
      opacity: 1;
    }

    100% {
      opacity: 1;
      transform: translateY(650px);
    }
  }

  @keyframes astronaut {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .box-of-star1,
  .box-of-star2,
  .box-of-star3,
  .box-of-star4 {
    width: 100%;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    transform: translateY(0px);
    height: 700px;
  }

  .box-of-star1 {
    animation: snow 5s linear infinite;
  }

  .box-of-star2 {
    animation: snow 5s -1.64s linear infinite;
  }

  .box-of-star3 {
    animation: snow 5s -2.30s linear infinite;
  }

  .box-of-star4 {
    animation: snow 5s -3.30s linear infinite;
  }

  .star {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #FFF;
    position: absolute;
    z-index: 10;
    opacity: 0.7;
  }

  .star:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #FFF;
    position: absolute;
    z-index: 10;
    top: 80px;
    left: 70px;
    opacity: .7;
  }

  .star:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #FFF;
    position: absolute;
    z-index: 10;
    top: 8px;
    left: 170px;
    opacity: .9;
  }

  .star-position1 {
    top: 30px;
    left: 20px;
  }

  .star-position2 {
    top: 110px;
    left: 250px;
  }

  .star-position3 {
    top: 60px;
    left: 570px;
  }

  .star-position4 {
    top: 120px;
    left: 900px;
  }

  .star-position5 {
    top: 20px;
    left: 1120px;
  }

  .star-position6 {
    top: 90px;
    left: 1280px;
  }

  .star-position7 {
    top: 30px;
    left: 1480px;
  }

  .astronaut {
    width: 250px;
    height: 300px;
    position: absolute;
    z-index: 11;
    top: calc(50% - 150px);
    left: calc(50% - 125px);
    animation: astronaut 5s linear infinite;
  }

  .schoolbag {
    width: 100px;
    height: 150px;
    position: absolute;
    z-index: 1;
    top: calc(50% - 75px);
    left: calc(50% - 50px);
    background-color: #94b7ca;
    border-radius: 50px 50px 0 0 / 30px 30px 0 0;
  }

  .head {
    width: 97px;
    height: 80px;
    position: absolute;
    z-index: 3;
    background: -webkit-linear-gradient(left, #e3e8eb 0%, #e3e8eb 50%, #fbfdfa 50%, #fbfdfa 100%);
    border-radius: 50%;
    top: 34px;
    left: calc(50% - 47.5px);
  }

  .head:after {
    content: "";
    width: 60px;
    height: 50px;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 30px);
    background: -webkit-linear-gradient(top, #15aece 0%, #15aece 50%, #0391bf 50%, #0391bf 100%);
    border-radius: 15px;
  }

  .head:before {
    content: "";
    width: 12px;
    height: 25px;
    position: absolute;
    top: calc(50% - 12.5px);
    left: -4px;
    background-color: #618095;
    border-radius: 5px;
    box-shadow: 92px 0px 0px #618095;
  }

  .body {
    width: 85px;
    height: 100px;
    position: absolute;
    z-index: 2;
    background-color: #fffbff;
    border-radius: 40px / 20px;
    top: 105px;
    left: calc(50% - 41px);
    background: -webkit-linear-gradient(left, #e3e8eb 0%, #e3e8eb 50%, #fbfdfa 50%, #fbfdfa 100%);
  }

  .panel {
    width: 60px;
    height: 40px;
    position: absolute;
    top: 20px;
    left: calc(50% - 30px);
    background-color: #b7cceb;
  }

  .panel:before {
    content: "";
    width: 30px;
    height: 5px;
    position: absolute;
    top: 9px;
    left: 7px;
    background-color: #fbfdfa;
    box-shadow: 0px 9px 0px #fbfdfa, 0px 18px 0px #fbfdfa;
  }

  .panel:after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    top: 9px;
    right: 7px;
    background-color: #fbfdfa;
    border-radius: 50%;
    box-shadow: 0px 14px 0px 2px #fbfdfa;
  }

  .arm {
    width: 80px;
    height: 30px;
    position: absolute;
    top: 121px;
    z-index: 2;
  }

  .arm-left {
    left: 30px;
    background-color: #e3e8eb;
    border-radius: 0 0 0 39px;
  }

  .arm-right {
    right: 30px;
    background-color: #fbfdfa;
    border-radius: 0 0 39px 0;
  }

  .arm-left:before,
  .arm-right:before {
    content: "";
    width: 30px;
    height: 70px;
    position: absolute;
    top: -40px;
  }

  .arm-left:before {
    border-radius: 50px 50px 0px 120px / 50px 50px 0 110px;
    left: 0;
    background-color: #e3e8eb;
  }

  .arm-right:before {
    border-radius: 50px 50px 120px 0 / 50px 50px 110px 0;
    right: 0;
    background-color: #fbfdfa;
  }

  .arm-left:after,
  .arm-right:after {
    content: "";
    width: 30px;
    height: 10px;
    position: absolute;
    top: -24px;
  }

  .arm-left:after {
    background-color: #6e91a4;
    left: 0;
  }

  .arm-right:after {
    right: 0;
    background-color: #b6d2e0;
  }

  .leg {
    width: 30px;
    height: 40px;
    position: absolute;
    z-index: 2;
    bottom: 70px;
  }

  .leg-left {
    left: 76px;
    background-color: #e3e8eb;
    transform: rotate(20deg);
  }

  .leg-right {
    right: 73px;
    background-color: #fbfdfa;
    transform: rotate(-20deg);
  }

  .leg-left:before,
  .leg-right:before {
    content: "";
    width: 50px;
    height: 25px;
    position: absolute;
    bottom: -26px;
  }

  .leg-left:before {
    left: -20px;
    background-color: #e3e8eb;
    border-radius: 30px 0 0 0;
    border-bottom: 10px solid #6d96ac;
  }

  .leg-right:before {
    right: -20px;
    background-color: #fbfdfa;
    border-radius: 0 30px 0 0;
    border-bottom: 10px solid #b0cfe4;
  }`;

export default Loader;

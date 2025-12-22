import { Component } from '../../types/component';
import './pacman-ghost-loader.css';

const Preview = () => (
  <div className="pacman-ghost-loader-container">
    <div id="ghost">
      <div id="red">
        <div id="pupil"></div>
        <div id="pupil1"></div>
        <div id="eye"></div>
        <div id="eye1"></div>
        <div id="top0"></div>
        <div id="top1"></div>
        <div id="top2"></div>
        <div id="top3"></div>
        <div id="top4"></div>
        <div id="st0"></div>
        <div id="st1"></div>
        <div id="st2"></div>
        <div id="st3"></div>
        <div id="st4"></div>
        <div id="st5"></div>
        <div id="an1"></div>
        <div id="an2"></div>
        <div id="an3"></div>
        <div id="an4"></div>
        <div id="an5"></div>
        <div id="an6"></div>
        <div id="an7"></div>
        <div id="an8"></div>
        <div id="an9"></div>
        <div id="an10"></div>
        <div id="an11"></div>
        <div id="an12"></div>
        <div id="an13"></div>
        <div id="an14"></div>
        <div id="an15"></div>
        <div id="an16"></div>
        <div id="an17"></div>
        <div id="an18"></div>
      </div>
      <div id="shadow"></div>
    </div>
  </div>
);

const ReactCode = `import React from 'react';
import './pacman-ghost-loader.css';

export default function PacManGhostLoader() {
  return (
    <div className="pacman-ghost-loader-container">
      <div id="ghost">
        <div id="red">
          <div id="pupil"></div>
          <div id="pupil1"></div>
          <div id="eye"></div>
          <div id="eye1"></div>
          <div id="top0"></div>
          <div id="top1"></div>
          <div id="top2"></div>
          <div id="top3"></div>
          <div id="top4"></div>
          <div id="st0"></div>
          <div id="st1"></div>
          <div id="st2"></div>
          <div id="st3"></div>
          <div id="st4"></div>
          <div id="st5"></div>
          <div id="an1"></div>
          <div id="an2"></div>
          <div id="an3"></div>
          <div id="an4"></div>
          <div id="an5"></div>
          <div id="an6"></div>
          <div id="an7"></div>
          <div id="an8"></div>
          <div id="an9"></div>
          <div id="an10"></div>
          <div id="an11"></div>
          <div id="an12"></div>
          <div id="an13"></div>
          <div id="an14"></div>
          <div id="an15"></div>
          <div id="an16"></div>
          <div id="an17"></div>
          <div id="an18"></div>
        </div>
        <div id="shadow"></div>
      </div>
    </div>
  );
}`;

const VueCode = `<template>
  <div class="pacman-ghost-loader-container">
    <div id="ghost">
      <div id="red">
        <div id="pupil"></div>
        <div id="pupil1"></div>
        <div id="eye"></div>
        <div id="eye1"></div>
        <div id="top0"></div>
        <div id="top1"></div>
        <div id="top2"></div>
        <div id="top3"></div>
        <div id="top4"></div>
        <div id="st0"></div>
        <div id="st1"></div>
        <div id="st2"></div>
        <div id="st3"></div>
        <div id="st4"></div>
        <div id="st5"></div>
        <div id="an1"></div>
        <div id="an2"></div>
        <div id="an3"></div>
        <div id="an4"></div>
        <div id="an5"></div>
        <div id="an6"></div>
        <div id="an7"></div>
        <div id="an8"></div>
        <div id="an9"></div>
        <div id="an10"></div>
        <div id="an11"></div>
        <div id="an12"></div>
        <div id="an13"></div>
        <div id="an14"></div>
        <div id="an15"></div>
        <div id="an16"></div>
        <div id="an17"></div>
        <div id="an18"></div>
      </div>
      <div id="shadow"></div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
@import './pacman-ghost-loader.css';
</style>`;

const HtmlCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    .pacman-ghost-loader-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;
    }

    #ghost {
      position: relative;
      scale: 0.8;
    }

    #red {
      animation: upNDown infinite 0.5s;
      position: relative;
      width: 140px;
      height: 140px;
      display: grid;
      grid-template-columns: repeat(14, 1fr);
      grid-template-rows: repeat(14, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      grid-template-areas:
        "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
        "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
        "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
        "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
        "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
        "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
        "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
        "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
        "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
        "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
        "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
        "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
        "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
        "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
    }

    @keyframes upNDown {
      0%, 49% {
        transform: translateY(0px);
      }
      50%, 100% {
        transform: translateY(-10px);
      }
    }

    #top0, #top1, #top2, #top3, #top4,
    #st0, #st1, #st2, #st3, #st4, #st5 {
      background-color: red;
    }

    #top0 { grid-area: top0; }
    #top1 { grid-area: top1; }
    #top2 { grid-area: top2; }
    #top3 { grid-area: top3; }
    #top4 { grid-area: top4; }
    #st0 { grid-area: st0; }
    #st1 { grid-area: st1; }
    #st2 { grid-area: st2; }
    #st3 { grid-area: st3; }
    #st4 { grid-area: st4; }
    #st5 { grid-area: st5; }

    #an1 { grid-area: an1; animation: flicker0 infinite 0.5s; }
    #an18 { grid-area: an18; animation: flicker0 infinite 0.5s; }
    #an2 { grid-area: an2; animation: flicker1 infinite 0.5s; }
    #an17 { grid-area: an17; animation: flicker1 infinite 0.5s; }
    #an3 { grid-area: an3; animation: flicker1 infinite 0.5s; }
    #an16 { grid-area: an16; animation: flicker1 infinite 0.5s; }
    #an4 { grid-area: an4; animation: flicker1 infinite 0.5s; }
    #an15 { grid-area: an15; animation: flicker1 infinite 0.5s; }
    #an6 { grid-area: an6; animation: flicker0 infinite 0.5s; }
    #an12 { grid-area: an12; animation: flicker0 infinite 0.5s; }
    #an7 { grid-area: an7; animation: flicker0 infinite 0.5s; }
    #an13 { grid-area: an13; animation: flicker0 infinite 0.5s; }
    #an9 { grid-area: an9; animation: flicker1 infinite 0.5s; }
    #an10 { grid-area: an10; animation: flicker1 infinite 0.5s; }
    #an8 { grid-area: an8; animation: flicker0 infinite 0.5s; }
    #an11 { grid-area: an11; animation: flicker0 infinite 0.5s; }

    @keyframes flicker0 {
      0%, 49% { background-color: red; }
      50%, 100% { background-color: transparent; }
    }

    @keyframes flicker1 {
      0%, 49% { background-color: transparent; }
      50%, 100% { background-color: red; }
    }

    #eye {
      width: 40px;
      height: 50px;
      position: absolute;
      top: 30px;
      left: 10px;
    }

    #eye::before {
      content: "";
      background-color: white;
      width: 20px;
      height: 50px;
      transform: translateX(10px);
      display: block;
      position: absolute;
    }

    #eye::after {
      content: "";
      background-color: white;
      width: 40px;
      height: 30px;
      transform: translateY(10px);
      display: block;
      position: absolute;
    }

    #eye1 {
      width: 40px;
      height: 50px;
      position: absolute;
      top: 30px;
      right: 30px;
    }

    #eye1::before {
      content: "";
      background-color: white;
      width: 20px;
      height: 50px;
      transform: translateX(10px);
      display: block;
      position: absolute;
    }

    #eye1::after {
      content: "";
      background-color: white;
      width: 40px;
      height: 30px;
      transform: translateY(10px);
      display: block;
      position: absolute;
    }

    #pupil {
      width: 20px;
      height: 20px;
      background-color: blue;
      position: absolute;
      top: 50px;
      left: 10px;
      z-index: 1;
      animation: eyesMovement infinite 3s;
    }

    #pupil1 {
      width: 20px;
      height: 20px;
      background-color: blue;
      position: absolute;
      top: 50px;
      right: 50px;
      z-index: 1;
      animation: eyesMovement infinite 3s;
    }

    @keyframes eyesMovement {
      0%, 49% { transform: translateX(0px); }
      50%, 99% { transform: translateX(10px); }
      100% { transform: translateX(0px); }
    }

    #shadow {
      background-color: black;
      width: 140px;
      height: 140px;
      position: absolute;
      border-radius: 50%;
      transform: rotateX(80deg);
      filter: blur(20px);
      top: 80%;
      animation: shadowMovement infinite 0.5s;
    }

    @keyframes shadowMovement {
      0%, 49% { opacity: 0.5; }
      50%, 100% { opacity: 0.2; }
    }
  </style>
</head>
<body>
  <div class="pacman-ghost-loader-container">
    <div id="ghost">
      <div id="red">
        <div id="pupil"></div>
        <div id="pupil1"></div>
        <div id="eye"></div>
        <div id="eye1"></div>
        <div id="top0"></div>
        <div id="top1"></div>
        <div id="top2"></div>
        <div id="top3"></div>
        <div id="top4"></div>
        <div id="st0"></div>
        <div id="st1"></div>
        <div id="st2"></div>
        <div id="st3"></div>
        <div id="st4"></div>
        <div id="st5"></div>
        <div id="an1"></div>
        <div id="an2"></div>
        <div id="an3"></div>
        <div id="an4"></div>
        <div id="an5"></div>
        <div id="an6"></div>
        <div id="an7"></div>
        <div id="an8"></div>
        <div id="an9"></div>
        <div id="an10"></div>
        <div id="an11"></div>
        <div id="an12"></div>
        <div id="an13"></div>
        <div id="an14"></div>
        <div id="an15"></div>
        <div id="an16"></div>
        <div id="an17"></div>
        <div id="an18"></div>
      </div>
      <div id="shadow"></div>
    </div>
  </div>
</body>
</html>`;

export const pacmanGhostLoader: Component = {
  id: 'loader-pacman-ghost',
  title: 'Pac-Man Ghost Loader',
  description: 'An animated Pac-Man ghost loader with flickering bottom and moving eyes, perfect for retro-themed loading indicators.',
  category: 'Loading',
  tags: ['loading', 'pacman', 'ghost', 'retro', 'animation'],
  preview: Preview,
  codes: [
    { language: 'react', code: ReactCode, label: 'React' },
    { language: 'vue', code: VueCode, label: 'Vue' },
    { language: 'html', code: HtmlCode, label: 'HTML/CSS' },
  ],
  explanation: `<strong>Pac-Man Ghost Loader Animation:</strong>

This loader recreates the classic Pac-Man ghost using CSS Grid and multiple animations to create a pixel-perfect animated ghost.

<strong>How It Works:</strong>

1. <strong>Grid Layout:</strong> The ghost body is created using CSS Grid with 14x14 cells, defining the shape through grid-template-areas.

2. <strong>Up and Down Animation:</strong> The entire ghost bounces up and down using the \`upNDown\` keyframe animation:
   - 0-49%: Normal position
   - 50-100%: Moves up 10px

3. <strong>Flickering Bottom:</strong> The bottom cells use alternating flicker animations (\`flicker0\` and \`flicker1\`) to create the classic ghost wavy bottom effect.

4. <strong>Eye Movement:</strong> The pupils move side to side using the \`eyesMovement\` animation, creating a lifelike effect.

5. <strong>Shadow Effect:</strong> A blurred shadow beneath the ghost pulses with opacity changes.

<strong>Key CSS Techniques:</strong>

- CSS Grid for pixel-perfect shape definition
- Multiple keyframe animations running simultaneously
- Pseudo-elements (::before, ::after) for eye shapes
- Transform and opacity animations for smooth effects`,
  author: 'BlackisPlay',
  createdAt: '2025-02-13',
};


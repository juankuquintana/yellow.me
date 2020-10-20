import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` }
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` }
}))`
  position: absolute;
  margin-top: calc(50vh - 125px);
  will-change: transform;
`;

const Title = styled.div`
  text-align: center;
  margin-top: calc(50vh - 217px);
  font-family: "TTInterfaces";
  font-weight: 500;
  font-size: 56px;
  line-height: 1.25;
  letter-spacing: -0.01px;
`;

const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  if(ref.current !== null) {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  }
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    if(-ref.current !== -0){
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    }  
  });
};

export default ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <Title>We promise</Title>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};

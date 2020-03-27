import React, { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components';

const Draggable = ({ children, position, radius }) => {
  const [state, setState] = useState({
    isDragging: false,
    translateX: position.x,
    translateY: position.y,
  });

  // mouse move
  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      if (state.isDragging) {
        setState(prevState => ({
          ...prevState,
          translateX: clientX,
          translateY: clientY,
        }));
      }
    },
    [state.isDragging],
  );

  // mouse left click release
  const handleMouseUp = useCallback(() => {
    if (state.isDragging) {
      setState(prevState => ({
        ...prevState,
        isDragging: false,
      }));
    }
  }, [state.isDragging]);

  // mouse left click hold
  const handleMouseDown = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isDragging: true,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <Container
      isDragging={state.isDragging}
      onMouseDown={handleMouseDown}
      radius={radius}
      x={state.translateX}
      y={state.translateY}
    >
      {children}
    </Container>
  );
};

Draggable.defaultProps = {
  position: {
    x: 20,
    y: 20,
  },
  radius: 10,
};

const Container = styled.div.attrs(({ x, y, radius }) => ({
  style: {
    transform: `translate(${x - radius}px, ${y - radius}px)`,
  },
}))`
  @media (min-width: 1024px) {
    position: absolute;
  }

  ${({ isDragging }) =>
    isDragging
      ? `
      opacity: 0.8;
      cursor: grabbing;
    `
      : `
      cursor: grab;
    `}
`;

export default Draggable;

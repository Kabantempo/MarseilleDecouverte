import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const nodeRef = React.useRef(null);
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        timeout={400}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageTransition;

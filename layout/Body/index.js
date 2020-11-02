import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import PageTransition from '@/components/Transition/PageTransition';

function Body(props) {
  const { query } = useRouter();
  const router = useRouter();

  return (
    <>
      <main id="main-content" role="main" className="main-content">
        <div className="container">
          <PageTransition location={router.asPath}>
            {props.children}
          </PageTransition>
        </div>
      </main>
      <style jsx>{``}</style>
    </>
  );
}

export default Body;

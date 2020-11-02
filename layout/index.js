import React, { useState, useEffect } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@/hooks/useMediaQuery';

function Layout(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const windows = useMediaQuery(0);

  const [isShowCookieBar, setIsShowCookieBar] = useState(false);

  return (
    <>
      <Header />
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
}

export default Layout;

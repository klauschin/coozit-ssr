import React, { useState, useEffect } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useRouter } from 'next/router';

function Footer() {
  const width = useMediaQuery(0);

  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-container">
          <small>coozit copyright 2020</small>
        </div>
      </footer>
      <style jsx>{``}</style>
    </>
  );
}

export default Footer;

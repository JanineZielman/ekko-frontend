import React, { useState, useEffect } from 'react';
import Menu from './menu'

const Layout = ({children, page}) => {
  return (
    <div className='grid-container'>
				<Menu/>
				
				{children}
				
				<footer>
					this is a footer
				</footer>
		</div>
  );
};



export default Layout;
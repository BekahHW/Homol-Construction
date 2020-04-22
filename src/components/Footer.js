import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://bekahhw.github.io/">BekahHW</a>.
        </span>
      </div>
    </footer>
  </div>
)

import React from 'react';
import { ReactDOM } from 'react';

import "../styles/footer.css"

function Footer() {
  return (
<footer class="footer-distributed">

      <div class="footer-left">

        <h3>Prince<span>Jetro</span></h3>

        <p class="footer-links">
         
          <a target="_blank" href="https://princejetro.vercel.app">Contact</a>
        </p>

        <p class="footer-company-name">PrinceJetro © 2024</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>3, Ebun Olorun Street</span> Lagos, Nigeria</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+2348088981691</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a target="_blank" href="mailto:adegbuyijephthah2gmail.com">support@princejetro</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the developer</span>
          As a passionate developer, I thrive on taking on new challenges and creating innovative solutions. With a keen eye for detail and a love for coding, I'm dedicated to crafting high-quality applications that exceed expectations. Whether it's building immersive user experiences or solving complex technical problems, I'm committed to delivering excellence in every project I undertake.
        </p>

        <div class="footer-icons">

          <a target="_blank" href="https://www.facebook.com/jerex.amon"><i class="fa fa-facebook"></i></a>
          <a target="_blank" href="https://x.com/PrinceJetro123"><i class="fa fa-twitter"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/jephthah-adegbuyi-38a76524a/"><i class="fa fa-linkedin"></i></a>
          <a target="_blank" href="https://github.com/PrinceJetro"><i class="fa fa-github"></i></a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

import React from "react";
import style from "./utils/Footer.module.css";
import Logo from "./utils/LogoFooter";
import Facebook from "../../svg/Icons-SocialMedia/Icons-footer/Footer-Face";
import GitHub from "../../svg/Icons-SocialMedia/Icons-footer/Footer-Git";
import Linke from "../../svg/Icons-SocialMedia/Icons-footer/Footer-Ins";
export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <span className={style.logo}>

        <Logo />
        </span>

        <div className={style.about}>
          <h1 className={style.h1}>About us</h1>
          <p className={style.p}>Development team</p>
          <p className={style.p}>FAQs</p>
          <p className={style.p}>Store Refund Policy</p>
        </div>

        <div className={style.contact}>
          <h1 className={style.h1}>Contact us </h1>
          <div className={style.socialDiv}>
            <Facebook />
            <p className={style.p}>Facebook</p>
          </div>
          <div className={style.socialDiv}> 
          <GitHub/>
          <p className={style.p}>GitHub</p>
          </div>
          <div className={style.socialDiv}> 
          <Linke/>
          <p className={style.p}>Linkedin</p>
          </div>

          
         
        </div>

        <div className={style.resurces}>
          <h1 className={style.h1}>Resources</h1>
          <p className={style.p}>Blog</p>
          <p className={style.p}>Learn more</p>
          <p className={style.p}>Terms of Use</p>
        </div>
      </div>
      <div className={style.text}>
        <p className={style.parrafoFinal}>
          {" "}
          © 2023, Andromeda Games, Inc. All tights reeserved.
          Andromeda, Andromeda Games, the logo's Andromeda Games.
        </p>
      </div>
    </div>
  );
}

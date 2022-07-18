import React from "react";
import { HeaderContainer } from "./style";

const PickrrHeader = () => {
  return (
    <HeaderContainer>
      <a href="http://pickrr.com/">
        <img
          src="https://d10srchmli830n.cloudfront.net/1652868953482_38eddf50-89ad-4916-adea-0861e26a95b4_Group-(1).svg"
          alt="pickrr_logo"
        />
      </a>
      <div className="social-icon-container">
        <a href="https://www.facebook.com/pickrr/" target="_blank">
          <img src="https://d10srchmli830n.cloudfront.net/1652950946901_035ad2b7-09b4-4e78-93c3-c310286c3e8b_bi_facebook.svg" />
        </a>
        <a href="https://www.instagram.com/pickrr_/" target="_blank">
          <img src="https://d10srchmli830n.cloudfront.net/1652951753044_dfe97bf5-728b-4c52-a9ba-65561a435e50_bx_bxl-instagram-alt.svg" />
        </a>
        <a href="https://twitter.com/Pickrr_" target="_blank">
          <img src="https://d10srchmli830n.cloudfront.net/1652952861732_4e75d8e1-053e-4a46-ad09-6b2e83205c88_typcn_social-twitter.svg" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCQ3tGnRSgzuD8z2v_H3XK6Q"
          target="_blank"
        >
          <img src="https://d10srchmli830n.cloudfront.net/1652952783327_f0130071-fcbd-4fca-b1a0-d174ca65626f_typcn_social-youtube.svg" />
        </a>
      </div>
    </HeaderContainer>
  );
};
export default PickrrHeader;

import React from "react";
import PropTypes from "prop-types";

//Section 1
import TeamWebpDesktop from "../images/culture/photos/webp/Yellowme-Team-Desktop.webp";
import TeamJpgDesktop from "../images/culture/photos/jpg/Yellowme-Team-Desktop.jpg";
import TeamWebpMobile from "../images/culture/photos/webp/Yellowme-Team-Mobile.webp";
import TeamJpgMobile from "../images/culture/photos/jpg/Yellowme-Team-Mobile.jpg";

import MigdonioWebpDesktop from "../images/culture/photos/webp/Migdonio-Yellowme-Team-Desktop.webp";
import MigdonioJpgDesktop from "../images/culture/photos/jpg/Migdonio-Yellowme-Team-Desktop.jpg";
import MigdonioWebpMobile from "../images/culture/photos/webp/Migdonio-Yellowme-Team-Mobile.webp";
import MigdonioJpgMobile from "../images/culture/photos/jpg/Migdonio-Yellowme-Team-Mobile.jpg";

import RicardoWebpDesktop from "../images/culture/photos/webp/Ricardo-Yellowme-Team-Desktop.webp";
import RicardoJpgDesktop from "../images/culture/photos/jpg/Ricardo-Yellowme-Team-Desktop.jpg";
import RicardoWebpMobile from "../images/culture/photos/webp/Ricardo-Yellowme-Team-Mobile.webp";
import RicardoJpgMobile from "../images/culture/photos/jpg/Ricardo-Yellowme-Team-Mobile.jpg";

import JimenaWebpDesktop from "../images/culture/photos/webp/Jimena-Yellowme-Team-Desktop.webp";
import JimenaJpgDesktop from "../images/culture/photos/jpg/Jimena-Yellowme-Team-Desktop.jpg";
import JimenaWebpMobile from "../images/culture/photos/webp/Jimena-Yellowme-Team-Mobile.webp";
import JimenaJpgMobile from "../images/culture/photos/jpg/Jimena-Yellowme-Team-Mobile.jpg";

import HidalgoWebpDesktop from "../images/culture/photos/webp/Hidalgo-Yellowme-Team-Desktop.webp";
import HidalgoJpgDesktop from "../images/culture/photos/jpg/Hidalgo-Yellowme-Team-Desktop.jpg";
import HidalgoWebpMobile from "../images/culture/photos/webp/Hidalgo-Yellowme-Team-Mobile.webp";
import HidalgoJpgMobile from "../images/culture/photos/jpg/Hidalgo-Yellowme-Team-Mobile.jpg";

import JuanWebpDesktop from "../images/culture/photos/webp/Juan-Yellowme-Team-Desktop.webp";
import JuanJpgDesktop from "../images/culture/photos/jpg/Juan-Yellowme-Team-Desktop.jpg";
import JuanWebpMobile from "../images/culture/photos/webp/Juan-Yellowme-Team-Mobile.webp";
import JuanJpgMobile from "../images/culture/photos/jpg/Juan-Yellowme-Team-Mobile.jpg";

//Section 2
import DaniWebpDesktop from "../images/culture/photos/webp/Dani-Yellowme-Team-Desktop.webp";
import DaniJpgDesktop from "../images/culture/photos/jpg/Dani-Yellowme-Team-Desktop.jpg";

import TeamCultureWebpDesktop from "../images/culture/photos/webp/Yellowme-Team-Culture-Desktop.webp";
import TeamCultureJpgDesktop from "../images/culture/photos/jpg/Yellowme-Team-Culture-Desktop.jpg";
import TeamCultureWebpMobile from "../images/culture/photos/webp/Yellowme-Team-Culture-Mobile.webp";
import TeamCultureJpgMobile from "../images/culture/photos/jpg/Yellowme-Team-Culture-Mobile.jpg";

import CesarWebpDesktop from "../images/culture/photos/webp/Cesar-Yellowme-Team-Desktop.webp";
import CesarJpgDesktop from "../images/culture/photos/jpg/Cesar-Yellowme-Team-Desktop.jpg";
import CesarWebpMobile from "../images/culture/photos/webp/Cesar-Yellowme-Team-Mobile.webp";
import CesarJpgMobile from "../images/culture/photos/jpg/Cesar-Yellowme-Team-Mobile.jpg";

import DanielWebpDesktop from "../images/culture/photos/webp/Daniel-Yellowme-Team-Desktop.webp";
import DanielJpgDesktop from "../images/culture/photos/jpg/Daniel-Yellowme-Team-Desktop.jpg";
import DanielWebpMobile from "../images/culture/photos/webp/Daniel-Yellowme-Team-Mobile.webp";
import DanielJpgMobile from "../images/culture/photos/jpg/Daniel-Yellowme-Team-Mobile.jpg";

import TeamMembersWebpDesktop from "../images/culture/photos/webp/Yellowme-Team-Members-Desktop.webp";
import TeamMembersJpgDesktop from "../images/culture/photos/jpg/Yellowme-Team-Members-Desktop.jpg";

const PhotosGrid = ({sectionNumber}) => {
  let photoGrid;
  switch (sectionNumber) {
    case 1:
      photoGrid = (
        <div className="photos-grid-section-1">
          <div className="photos-wrapper-section-1">
            <div class="slot photo-1">
              <picture>
                <source srcSet={TeamWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={TeamJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                <source srcSet={TeamWebpMobile} type="image/webp" />
                <source srcSet={TeamJpgMobile} type="image/jpeg" />
                
                <img srcSet={TeamJpgDesktop} />
              </picture>
            </div>
            <div class="slot photo-2">
              <picture>
                <source srcSet={MigdonioWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={MigdonioJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                <source srcSet={MigdonioWebpMobile} type="image/webp" />
                <source srcSet={MigdonioJpgMobile} type="image/jpeg" />
                
                <img srcSet={MigdonioJpgDesktop} />
              </picture>
            </div>
            <div class="slot photo-3">
              <picture>
                <source srcSet={RicardoWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={RicardoJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                <source srcSet={RicardoWebpMobile} type="image/webp" />
                <source srcSet={RicardoJpgMobile} type="image/jpeg" />
                
                <img srcSet={RicardoJpgDesktop} />
              </picture>
            </div>
            <div class="slot photo-4">
              <picture>
                <source srcSet={JimenaWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={JimenaJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                <source srcSet={JimenaWebpMobile} type="image/webp" />
                <source srcSet={JimenaJpgMobile} type="image/jpeg" />
                
                <img srcSet={JimenaJpgDesktop} />
              </picture>
            </div>
            <div class="slot photo-5">
              <picture>
                <source srcSet={HidalgoWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={HidalgoJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                <source srcSet={HidalgoWebpMobile} type="image/webp" />
                <source srcSet={HidalgoJpgMobile} type="image/jpeg" />
                
                <img srcSet={HidalgoJpgDesktop} />
              </picture>
            </div>
            <div class="slot photo-6">
              <picture>
                <source srcSet={JuanWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={JuanJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                <source srcSet={JuanWebpMobile} type="image/webp" />
                <source srcSet={JuanJpgMobile} type="image/jpeg" />
                
                <img srcSet={JuanJpgDesktop} />
              </picture>
            </div>
          </div>
        </div>
      )
      break;
    case 2:
      photoGrid = (
        <div className="photos-grid-section-2">
          <div className="photos-wrapper-section-2">
            <div class="slot photo-1">
              <picture>
                <source srcSet={DaniWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={DaniJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                
                <img srcSet={DaniJpgDesktop} />
              </picture>
            </div>
            <div class="slot photo-2">
              <picture>
                <source srcSet={TeamCultureWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={TeamCultureJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                <source srcSet={TeamCultureWebpMobile} type="image/webp" />
                <source srcSet={TeamCultureJpgMobile} type="image/jpeg" />
                
                <img srcSet={TeamCultureJpgDesktop} />
              </picture>
            </div>
            <div class="slot photo-3">
              <picture>
                <source srcSet={CesarWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={CesarJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                <source srcSet={CesarWebpMobile} type="image/webp" />
                <source srcSet={CesarJpgMobile} type="image/jpeg" />
                
                <img srcSet={CesarJpgDesktop} />
              </picture>
            </div>
            <div class="slot photo-4">
              <picture>
                <source srcSet={DanielWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={DanielJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                <source srcSet={DanielWebpMobile} type="image/webp" />
                <source srcSet={DanielJpgMobile} type="image/jpeg" />
                
                <img srcSet={DanielJpgDesktop} />
              </picture>
            </div>
            <div class="slot photo-5">
              <picture>
                <source srcSet={TeamMembersWebpDesktop} media="(min-width: 992px)" type="image/webp" />
                <source srcSet={TeamMembersJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
                
                <img srcSet={TeamMembersJpgDesktop} />
              </picture>
            </div>
          </div>
        </div>
      )
      break;
    default:
      photoGrid = (<></>)
      break;
  }

  return photoGrid;
}

PhotosGrid.propTypes = {
  sectionNumber: PropTypes.number,
}

export default PhotosGrid

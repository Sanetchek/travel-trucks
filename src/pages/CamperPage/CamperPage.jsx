import React, { useEffect } from "react";
import { NavLink, Link, useParams, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCampersById } from "../../redux/campers/operations";
import {
  selectCamperById,
  selectLoading,
  selectError
} from "../../redux/campers/selectors";

import css from "./CamperPage.module.css";
import snippets from "../../assets/images/snippets.svg";

import Loading from "../../components/Loading/Loading";
import ModalImage from "react-modal-image";
import clsx from "clsx";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function CamperPage() {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => selectCamperById(state, camperId));
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (camperId) {
      dispatch(getCampersById(camperId));
    }
  }, [camperId, dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!camper) {
    return <div>Camper not found</div>;
  }

  const reviewsCount =
    camper.reviews && Array.isArray(camper.reviews) ? camper.reviews.length : 0;
  const gallery =
    camper.gallery && Array.isArray(camper.gallery) ? camper.gallery : [];
  const formattedPrice = camper.price ? camper.price.toFixed(2) : "N/A";

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.container}>
      <div className="mainContainer">
        <h1 className={css.title}>{camper.name}</h1>
        <div className={css.info}>
          <span className={css.rating}>
            <svg className={css.iconStar} width="16" height="16">
              <use href={`${snippets}#icon-star`}></use>
            </svg>
            <Link to={`/catalog/${camperId}/reviews`}>
              {camper.rating} ({reviewsCount} Reviews)
            </Link>
          </span>
          <span className={css.location}>
            <svg className={css.iconMap} width="16" height="16">
              <use href={`${snippets}#icon-map`}></use>
            </svg>
            {camper.location}
          </span>
        </div>

        <div className={css.price}>
          <span className={css.priceValue}>€{formattedPrice}</span>
        </div>

        <div className={css.gallery}>
          {gallery.length > 0 &&
            gallery.map((image, index) => (
              <div key={index} className={css.galleryImgWrap}>
                <ModalImage
                  className={css.galleryImg}
                  small={image.thumb}
                  large={image.original}
                  alt={`Gallery Image ${index + 1}`}
                  hideDownload={true} // Optional: hides the download button
                />
              </div>
            ))}
        </div>

        <p className={css.description}>{camper.description}</p>

        <nav className={css.nav}>
          <NavLink
            to={`/catalog/${camperId}/features`}
            className={buildLinkClass}
          >
            Features
          </NavLink>
          <NavLink
            to={`/catalog/${camperId}/reviews`}
            className={buildLinkClass}
          >
            Reviews
          </NavLink>
        </nav>

        <div className={css.footer}>
          <div className={css.camperInfo}>
            <Outlet context={{ camper }} />
          </div>

          <div className={css.camperForm}>
            <h2 className={css.formTitle}>Book your campervan now</h2>
            <p className={css.formDescription}>
              Stay connected! We are always ready to help you.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}


















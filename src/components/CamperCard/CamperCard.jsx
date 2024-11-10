import React from "react";
import css from "./CamperCard.module.css";
import snippets from "../../assets/images/snippets.svg";
import Features from "../Features/Features";
import { NavLink } from "react-router-dom";

export default function CamperCard({ camper }) {
  const thumb = camper.gallery[0].original;
  const reviewsCount = camper.reviews.length;

  return (
    <div className={css.container}>
      <div className={css.image}>
        <img src={thumb} alt="thumb" width="569" height="320" loading="lazy" />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{camper.name}</h2>

          <div className={css.price}>
            <span className={css.priceValue}>€{camper.price.toFixed(2)}</span>

            <span className={css.like}>
              <svg className={css.iconHeart} width="24" height="21">
                <use href={`${snippets}#icon-heart`}></use>
              </svg>
            </span>
          </div>

          <div className={css.info}>
            <span className={css.rating}>
              <svg className={css.iconStar} width="16" height="16">
                <use href={`${snippets}#icon-star`}></use>
              </svg>
              {camper.rating}({reviewsCount} Reviews)
            </span>

            <span className={css.location}>
              <svg className={css.iconMap} width="16" height="16">
                <use href={`${snippets}#icon-map`}></use>
              </svg>
              {camper.location}
            </span>
          </div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <Features camper={camper} />

        <NavLink to={`/catalog/${camper.id}`} className="btn">
          Show more
        </NavLink>
      </div>
    </div>
  );
};




























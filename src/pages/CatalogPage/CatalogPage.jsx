import React, { useState } from "react";
import css from "./CatalogPage.module.css";
import { useSelector } from "react-redux";
import {
  selectAllCampers,
  selectTotalCampers
} from "../../redux/campers/selectors";
import CamperCard from "../../components/CamperCard/CamperCard";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import clsx from "clsx";

export default function CatalogPage() {
  const campersTotal = useSelector(selectTotalCampers);
  const camperList = useSelector(selectAllCampers);

  const [visibleCount, setVisibleCount] = useState(4);

  const loadMoreClasses = clsx("btn-transparent", css.loadMore);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className={css.catalog}>
      <div className="mainContainer">
        <div className={css.container}>
          <div className={css.filter}>
            <CatalogFilter />
          </div>

          <div className={css.content}>
            {camperList &&
              camperList.slice(0, visibleCount).map((camper) => (
                <div key={camper.id} className={css.camperItem}>
                  <CamperCard camper={camper} />
                </div>
              ))}

            {visibleCount < campersTotal && (
              <button className={loadMoreClasses} onClick={loadMore}>
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}






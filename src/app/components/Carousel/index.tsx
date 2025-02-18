import React, { Fragment } from "react";
import Banner2 from "@/app/assets/banner_2.png";
import Banner3 from "@/app/assets/banner_3.png";
import Image from "next/image";
import styles from "./style.module.scss";

function Carousel() {
    return (
        <Fragment>
            <div
                id="carouselExampleIndicators"
                className={["carousel", "slide", `${styles.carousel}`].join(" ")}
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image className={styles.carousel__img} src={Banner2} alt="banner_2" />
                    </div>
                    <div className="carousel-item">
                        <Image className={styles.carousel__img} src={Banner3} alt="banner_3" />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Fragment>
    );
}

export default Carousel;

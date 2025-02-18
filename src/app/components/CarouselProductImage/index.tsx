"use client";

import Image from "next/image";
import "./style.scss";
import { useState } from "react";

type CarouselProductImagePropsType = React.HTMLProps<HTMLDivElement> & {
    images: string[];
    onChangeImage: (image: string) => void;
};

const CarouselProductImage = ({ images, onChangeImage, ...rest }: CarouselProductImagePropsType) => {
    const [selected, setSelected] = useState<string>(images[0]);

    return (
        <div {...rest} className={`carousel-prod-img ${rest.className ?? ""}`}>
            {images.map((image, index) => (
                <Image
                    className={`carousel-prod-img__item ${image === selected ? "active" : ""}`.trimEnd()}
                    key={index}
                    src={image}
                    alt=""
                    width={50}
                    height={50}
                    onClick={() => {
                        setSelected(image);
                        onChangeImage(image);
                    }}
                />
            ))}
        </div>
    );
};

export default CarouselProductImage;

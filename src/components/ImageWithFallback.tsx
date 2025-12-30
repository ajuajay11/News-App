import { useState } from 'react';
import FallbackImage from "../assets/images/winner.webp"; // Using existing image as default fallback, can be changed

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

export default function ImageWithFallback({
    src,
    fallbackSrc = FallbackImage,
    alt,
    ...props
}: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
        setImgSrc(fallbackSrc);
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
}

import React, { useEffect, useState } from 'react'

export default function useScreen() {
    const [width, setWidth] = useState(window.innerWidth);

    console.log("inside hooks", width);

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return width;
}

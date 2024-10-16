import React, { useEffect, useRef, useState } from 'react';

const StandByUI = ({ picture }) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 2, y: 2 });
    const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');

    const colors: string[] = ['#19305a', '#79cdff', '#FFFFFF'];

    const updatePosition = () => {
        if (imgRef.current) {
            const { clientWidth, clientHeight } = imgRef.current.parentElement!;
            const imgWidth = imgRef.current.clientWidth;
            const imgHeight = imgRef.current.clientHeight;

            let newX = position.x + direction.x;
            let newY = position.y + direction.y;

            let bounce = false;
            if (newX + imgWidth > clientWidth || newX < 0) {
                setDirection((prev) => ({ ...prev, x: -prev.x }));
                bounce = true;
            }
            if (newY + imgHeight > clientHeight || newY < 0) {
                setDirection((prev) => ({ ...prev, y: -prev.y }));
                bounce = true;
            }

            if (bounce) {
                setBackgroundColor((prevColor) => {
                    const currentIndex = colors.indexOf(prevColor);
                    const nextIndex = (currentIndex + 1) % colors.length;
                    return colors[nextIndex];
                });
            }

            setPosition((prev) => ({
                x: prev.x + direction.x,
                y: prev.y + direction.y,
            }));
        }
    };

    useEffect(() => {
        const interval = setInterval(updatePosition, 16);
        return () => clearInterval(interval);
    }, [position, direction]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor, overflow: 'hidden' }}>
            <img
                ref={imgRef}
                src={picture("img/standbymodeBG.png")}
                alt="Bouncing Image"
                style={{ position: 'absolute', left: position.x, top: position.y, width: '300px' }}
            />
        </div>
    );
};

export default StandByUI;

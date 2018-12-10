import posed from "react-pose";

export const BoxOpacity = posed.div({
    enter: {
        opacity: 1,
        transition: {
            duration: 300,
            opacity: { type: 'tween' },
        }
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 300,
            opacity: { type: 'tween' },
        }
    },
    visibleDelay: {
        opacity: 1,
        transition: {
            duration: 500,
            opacity: { type: 'tween', delay: 2000 },
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 300,
            opacity: { type: 'tween' },
        }
    },
});

export const PosedContainer = posed.div({
    enter: { staggerChildren: 50 }
});

export const BoxPosed = posed.div({
    enter: {
        opacity: 1,
        staggerChildren: 50,
        transition: {
            duration: 1000,
            opacity: { type: 'tween', delay: 2000 },
        }
    },
    exit: {
        opacity: 0,
        applyAtEnd: { display: 'none' },
        transition: {
            duration: 200,
            opacity: { type: 'tween' },
        }
    }
});

export const BoxTranslate = posed.div({
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1000,
            opacity: { type: 'tween', delay: 2000 },
        }
    },
    exit: {
        x: '-100%',
        opacity: 0,
        applyAtEnd: { display: 'none' },
        transition: {
            duration: 500,
            opacity: { type: 'tween' },
        }
    }
});

import posed from "react-pose";

export const BoxOpacity = posed.div({
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
            opacity: { type: 'tween', delay: 3000 },
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

export const isVue = (current, active) => {
    return active.includes(current);
};

export const isDefined = (el) => {
    console.log(el)
    if (typeof el === 'undefined' || el === null) {
        return null;
    }
    return el;
};

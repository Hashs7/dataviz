/**
 *
 * @param current
 * @param active
 * @returns {boolean|*}
 */
export const isVue = (current, active) => {
    return active.includes(current);
};

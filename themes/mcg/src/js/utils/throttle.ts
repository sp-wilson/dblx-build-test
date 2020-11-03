export const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function (...args) {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function () {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};

let is_ok = true;

const customFetch = (time, prods) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(prods);
            } else {
                reject("Error in the customFetch");
            }
        }, time);
    })
}

export default customFetch;
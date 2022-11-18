let is_ok = true;

const customFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve()
            } else {
                reject("Error in the customFetch")
            }
        },)
    })
}

export default customFetch;
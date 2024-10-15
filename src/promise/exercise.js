export function delay(time, message) {
    const hello = new Promise((resolve, reject) => {
        if (time >= 0) {
            window.setTimeout(() => {
                resolve (message)
        }, time)
    } else {
        reject("Time cannot be negative")
    }
    })
    return hello
}
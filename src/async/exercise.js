export async function runCode() {
    try {
        const ir = await fetch(url);
        console.log(ir);
    } catch (error) {
        console.error(error);
    }
    const url = 'https://domain-api-com';
}
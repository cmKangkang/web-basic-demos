function request(url, method) {
    return fetch(url, {
        method: method
    });
}
export async function get(url) {
    console.log("请求");
    try {
        let res = await request(url, 'get');
        let data = res.json();
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}
//# sourceMappingURL=request.js.map
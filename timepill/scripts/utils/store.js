export function storePills(url, pills) {
    let data = JSON.stringify(pills);
    let blob = new Blob([data], { type: 'application/json' });
    console.log(blob);
    let a = document.createElement('a');
    let blobUrl = URL.createObjectURL(blob);
    a.href = blobUrl;
    a.download = url;
    a.click();
}
//# sourceMappingURL=store.js.map
export function LoadResource(source: string) {
    return new Promise<HTMLImageElement>((res, rej) => {
        const $Image = new Image();
        $Image.src = source;
        $Image.style.display = 'none'
        const loading = document.body.appendChild($Image)
        loading.onerror = error => rej(false);
        loading.onload =  response => {
            res($Image)
        }
    });
}
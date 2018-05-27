class EnumeratedResult {

    async delayNext(t) {
        await new Promise((res) => {setTimeout(res, t)});
    }
}

export default EnumeratedResult;
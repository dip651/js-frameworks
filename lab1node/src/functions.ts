function printMessage(text: string, times: number = 1): void {
    for (let i = 0; i < times; i++) {
        console.log(text);
    }
}

printMessage("my text");
printMessage("repeated msg", 3);

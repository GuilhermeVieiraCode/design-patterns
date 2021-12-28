export class FileLogger implements Logger {
    public async info(message: string): Promise<void> {
        console.log(message);
        console.log("Message saved with FileLogger");
    }
}
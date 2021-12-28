export class CloudLoggerAdapter implements Logger{
    protected cloudLogger: CloudLogger;

    constructor(cloudLogger: CloudLogger){
        this.cloudLogger = cloudLogger;
    }

    public async info(message: string): Promise<void> {
        await this.cloudLogger.sendToServer(message, 'info');
    }
    
}
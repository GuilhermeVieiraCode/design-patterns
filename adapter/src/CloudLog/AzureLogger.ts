export class AzureLogger implements CloudLogger{
    public async sendToServer(message: string, type: string): Promise<void> {
        console.log(message);
        console.log("Message saved with AzureLogger");
    }
    
}
import { AzureLogger } from "./CloudLog/AzureLogger";
import { CloudLoggerAdapter } from "./CloudLoggerAdapter";
import { FileLogger } from "./FileLog/FileLogger";
import { NotificationService } from "./NotificationService";

(async () => {
    // const notificationService = new NotificationService(new FileLogger());
    // await notificationService.send('This is a file logger notification');

    const azureLogger = new AzureLogger();
    const cloudLoggerAdapter = new CloudLoggerAdapter(azureLogger);
    const notificationService = new NotificationService(cloudLoggerAdapter);
    await notificationService.send('This is a server logger notification');
})();
import {PaymentService} from "./paymentService";
import {PinoLogger} from "./pino-logger";
import {ConsoleLogger} from "./console-logger";

const logger = process.env.NODE_ENV === 'production'
    ? new PinoLogger()
    : new ConsoleLogger()

const paymentService = new PaymentService();
paymentService.logger = logger;
paymentService.sendMoney();
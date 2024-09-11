import {SaleService} from "./apps/app2/backend/services/SaleService";
import {UserService} from "./apps/app1/backend/services/UserService";

export class ServiceContainer {
    private static instance: ServiceContainer;

    public userService: UserService;
    public saleService: SaleService;

    private constructor() {
        this.userService = new UserService();
        this.saleService = new SaleService(this.userService);
    }

    public static getInstance(): ServiceContainer {
        if (!ServiceContainer.instance)
            ServiceContainer.instance = new ServiceContainer();

        return ServiceContainer.instance;
    }
}
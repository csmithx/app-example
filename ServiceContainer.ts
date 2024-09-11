import {SaleService} from "./apps/app2/backend/services/SaleService";
import {UserService} from "./apps/app1/backend/services/UserService";
import {SaleRepository} from "./apps/app2/backend/repositories/SaleRepository";
import {UserRepository} from "./apps/app1/backend/repositories/UserRepository";

export class ServiceContainer {
    private static instance: ServiceContainer;

    public userService: UserService;
    public saleService: SaleService;

    private constructor() {

        // Dependencies are resolved here

        this.userService = new UserService(new UserRepository());
        this.saleService = new SaleService(new SaleRepository())
    }

    public static getInstance(): ServiceContainer {
        if (!ServiceContainer.instance)
            ServiceContainer.instance = new ServiceContainer();

        return ServiceContainer.instance;
    }
}
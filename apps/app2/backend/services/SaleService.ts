import {
    SalesServiceInterface,
    UserServiceInterface
} from "../../../../interfaces/ServicesInterfaces";
import {SalesInterface, UserInterface} from "../../../../interfaces/EntityInterfaces";
import {GetSalesAction} from "../actions/GetSalesAction";
import {SaleRepository} from "../repositories/SaleRepository";

// The service should act as a facade for the application, it should not contain any business logic

export class SaleService implements SalesServiceInterface {

    // Internal app repositories
    private saleRespository: SaleRepository;

    // Services (passed as dependencies)
    private userService: UserServiceInterface;

    constructor(userService: UserServiceInterface) {

        this.userService = userService;

        // @TODO: Inject the repository or use a factory or something for resolving the internal application dependencies
        this.saleRespository = new SaleRepository();
    }

    getSale(): Promise<SalesInterface | null> {
        return (new GetSalesAction(this.userService, this.saleRespository)).execute();
    }
}
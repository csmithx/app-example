import {
    SalesServiceInterface,
    UserServiceInterface
} from "../../../../interfaces/ServicesInterfaces";
import {SalesInterface, UserInterface} from "../../../../interfaces/EntityInterfaces";
import {GetSalesAction} from "../actions/GetSalesAction";
import {SaleRepository} from "../repositories/SaleRepository";

// The service should act as a facade for the application, it should not contain any business logic

export class SaleService implements SalesServiceInterface {

    private saleRespository: SaleRepository;

    constructor(saleRepository: SaleRepository) {
        this.saleRespository = saleRepository;
    }

    getSale(): Promise<SalesInterface | null> {
        return (new GetSalesAction(this.saleRespository)).execute();
    }
}
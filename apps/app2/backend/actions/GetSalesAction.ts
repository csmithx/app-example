import {ActionInterface} from "../../../../interfaces/ActionInterface";
import {SalesInterface} from "../../../../interfaces/EntityInterfaces";
import {UserServiceInterface} from "../../../../interfaces/ServicesInterfaces";
import {SaleRepository} from "../repositories/SaleRepository";
import {ServiceContainer} from "../../../../ServiceContainer";

export class GetSalesAction implements ActionInterface {

    private userService: UserServiceInterface;
    private salesRepository: SaleRepository;

    constructor(
        salesRepository: SaleRepository
    ) {
        this.salesRepository = salesRepository;
    }

    async execute(): Promise<SalesInterface | null> {

        // The business logic should be here

        const sale = await this.salesRepository.getSale();
        if (!sale)
            return null;

        return {
            id: sale.id,
            user: await ServiceContainer.getInstance().userService.getUser(sale.user_id)
        };
    }
}
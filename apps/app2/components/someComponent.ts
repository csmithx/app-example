import {ServiceContainer} from "../../../ServiceContainer";

export default async () => {
 console.log('sale', await ServiceContainer.getInstance().saleService.getSale());
};
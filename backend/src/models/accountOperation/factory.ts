import Model from "./model";
import bankAccount from "./mysql";

export default function getModel(): Model {
    return bankAccount;
}
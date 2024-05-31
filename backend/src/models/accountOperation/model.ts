import DTO from './dto';

export default interface Model {
    getAllAccountOperations (accountNumber: number): Promise<DTO[]>;
    add (bankAccount: DTO): Promise<DTO>;
}
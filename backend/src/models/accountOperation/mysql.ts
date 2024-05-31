import Model from "./model";
import DTO from './dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";

class AccountOperations implements Model {

    async getAllAccountOperations(accountNumber: number): Promise<DTO[]> {

        const operations = await query(`
            SELECT  id,
                    accountNumber,
                    type,
                    date,
                    sum,
                    interest,
                    amountOfPayments
            FROM    AccountOperations  
            WHERE   accountNumber = ?
            ORDER BY date DESC
        `, [accountNumber]);
        return operations;
    }


    async getOne(id: number): Promise<DTO> {
        const operation = (await query(`
            SELECT  id,
                    accountNumber,
                    type,
                    date,
                    sum,
                    interest,
                    amountOfPayments
            FROM    AccountOperations  
            WHERE   id = ?
        `, [id]))[0];
        return operation;
    }


    async add(operation: DTO): Promise<DTO> {
        const { accountNumber, type, date, sum, interest, amountOfPayments } = operation;
        const result: OkPacketParams = await query(`
            INSERT INTO AccountOperations  
            (accountNumber, type, date, sum, interest, amountOfPayments)
            VALUES
            (?, ?, ?, ?, ?, ?)
        `, [accountNumber, type, date, sum, interest, amountOfPayments]);
        return this.getOne(result.insertId);
    }

}

const operations = new AccountOperations();
export default operations;
import Joi from "joi"
import DTO from '../../models/accountOperation/dto';

export const addAccountOperationValidator = Joi.object<DTO>({
    accountNumber: Joi.number().positive().required(),
    type: Joi.string().valid('deposit', 'withdrawal', 'loan').required(),
    date: Joi.date().required(),
    sum: Joi.number().required(),
    interest: Joi.number().optional(),
    amountOfPayments: Joi.number().positive().optional()
});

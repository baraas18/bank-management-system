import { NextFunction, Request, Response } from "express";
import getModel from "../../models/accountOperation/factory";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import config from 'config';
import createHttpError, { Unauthorized } from "http-errors";

export const getAllAccountOperations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.params);

        const operations = await getModel().getAllAccountOperations(+req.params.accountNumber)
        res.json(operations);
    } catch (err) {
        next(err)
    }
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const operation = await getModel().add(req.body)
        res.status(StatusCodes.CREATED).json(operation);
    } catch (err) {
        next(err)
    }
}

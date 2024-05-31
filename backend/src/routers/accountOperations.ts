import { Router } from "express";
import validate from "../middlewares/input-validation";
import { add, getAllAccountOperations} from "../controllers/accountOperations/controller";
import { addAccountOperationValidator } from "../controllers/accountOperations/validator";

const router = Router();

router.get('/:accountNumber', getAllAccountOperations);
router.post('/', validate(addAccountOperationValidator), add);

export default router;
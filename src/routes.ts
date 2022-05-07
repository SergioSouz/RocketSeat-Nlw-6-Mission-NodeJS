import { Router } from 'express'
import { CreateUserController } from './Controllers/CreateUserController'
import { CreateTagController } from './Controllers/CreateTagController'

import { ansureAdmin } from './middlewares/ensureAdmin';




const router = Router();


const createUserController = new CreateUserController();
const createTagController = new CreateTagController();


router.post('/tags', ansureAdmin, createTagController.handle)
router.post('/users', createUserController.handle)


export { router }
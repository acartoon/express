import {Router} from 'express';
const router = Router();
import { getAll, create, remove } from  '../controllers/servers.js';


router.get('/api/server', getAll);
router.post('/api/server', create);
router.delete('/api/server/:id', remove);
export default router;
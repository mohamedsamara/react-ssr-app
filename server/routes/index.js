import { Router } from 'express';

import BadgeController from '../controllers/badge.controller';

const router = Router();

router.get('/badge', BadgeController.get);

export default router;

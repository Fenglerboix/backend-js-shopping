/**
 * User
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */

const { Router } = require('express');
const controller = require('./user.controller');

const auth = require('./../../auth/auth.service');

const router = new Router();

router.post('/', controller.create);
router.get('/', auth.isAuthenticated(), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.remove);

module.exports = router;
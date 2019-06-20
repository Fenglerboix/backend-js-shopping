/**
 * Auth configuration
 * @author: Cristian Moreno Zulauaga <khriztianmoreno@gmail.com>
 */

const { Router } = require('express');

const controller = require('./product.controller');

const auth = require('../../auth/auth.service')

const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.remove);

module.exports = router;
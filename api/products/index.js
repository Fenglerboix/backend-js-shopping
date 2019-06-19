/**
 * Auth configuration
 * @author: Cristian Moreno Zulauaga <khriztianmoreno@gmail.com>
 */

const { Router } = require('express');

const controller = require('./product.controller');

const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.patch('/:id', controller.update);

module.exports = router;
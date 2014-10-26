var express = require('express');

var topicController = require('./api/v1/topic');
var userController = require('./api/v1/user');
var toolsController = require('./api/v1/tools');
var replyController = require('./api/v1/reply');
var middleware = require('./api/v1/middleware');

var router = express.Router();

// 主题
router.get('/topics', topicController.index);
router.get('/topic/:id', topicController.show);
router.post('/topics', middleware.auth, topicController.create);

// 用户
router.get('/user/:loginname', userController.show);

// accessToken 测试
router.post('/accesstoken', middleware.auth, toolsController.accesstoken);

// 评论
router.post('/topic/:topic_id/replies', middleware.auth, replyController.create);
router.post('/reply/:reply_id/ups', middleware.auth, replyController.ups);

module.exports = router;

const express = require('express');

exports.loginPage = function(req, res, next) {
    res.render('index', { title: 'Ardev' });
};
exports.loginGet = function(req, res, next) {
    res.render('dashboard', { title: 'Ardev' });
};
exports.loginPost = function(req, res, next) {
    res.render('index', { title: 'Ardev' });
};
const express = require('express');
const jsonData = require('../public/portfolio.json');

exports.projectsAll = function(req, res, next) {
    res.render('projectsAll', { jsonData });
};

exports.projectsAdd = function(req, res, next) {
    res.status(200).json({message: "la route n'est pas encore inplementée"})
};

exports.projectsDetail = function(req, res, next) {
    res.status(200).json({message: "la route n'est pas encore inplementée"})
};

exports.projectsDelete = function(req, res, next) {
    res.status(200).json({message: "la route n'est pas encore inplementée"})
};

exports.projectsUpdate = function(req, res, next) {
    res.status(200).json({message: "la route n'est pas encore inplementée"})
};
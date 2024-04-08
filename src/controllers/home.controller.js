'use strict';

const home = async (req, res) => {
    res.render('./pages/home');
}

module.exports = { home }
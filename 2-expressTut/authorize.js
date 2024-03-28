const authorize = (req, res, next) => {
    const {user} = req.query
    if (user === 'prabin'){
        req.user = {name: 'prabin', id: 3}
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }
}

module.exports = authorize
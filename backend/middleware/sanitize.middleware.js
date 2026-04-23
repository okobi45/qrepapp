const sanitize = (req, res, next) => {
    if (req.body) {
        const bodyString = JSON.stringify(req.body)
        const cleanString = bodyString.replace(/\$/g, "").replace(/\.\./g, "")
        req.body = JSON.parse(cleanString)
    }
    next()
}

module.exports = sanitize
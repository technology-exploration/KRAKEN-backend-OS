function error() {
  return function(err, req, res, _next) {
    if (err !== undefined) {
      console.error(`unknown error on request ${req}: ${err.message}: ${err.stack}`)
    }
    res.status(500)
    res.set('content-type', 'application/json; charset=utf-8')
    const errorMessage = {
      error: {
        message: err.message,
      },
    }
    res.send(errorMessage)
  }
}
module.exports = {
  error,
}
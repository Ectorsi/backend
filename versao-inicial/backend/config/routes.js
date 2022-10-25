module.exports = app => {
    const { save, get, getById } = app.api.user;
    app.route('/users')
        .post(save)
        .get(get)
        
    app.route('/users/:id')
        .get(getById)
        .put(save)
}
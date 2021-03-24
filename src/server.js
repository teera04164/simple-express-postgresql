const http = require('http');
const express = require('express');
const publiceRoute = require('./routes/public.route')
const teacherRoute = require('./routes/teacher.route')
const courseRoute = require('./routes/course.route')
const db = require('./models');
const { BASE_PATH } = require('./config')
const { logger } = require('./utils')

let httpServer;
const initialize = async () => {
    try {
        const app = express();
        // force: true will drop the table if it already exists
        db.sequelize.sync({ force: true }).then(() => {
            logger.info('Drop and Resync with { force: true }')
        });

        app.use(express.json())
        app.use(publiceRoute)
        app.use(BASE_PATH, teacherRoute)
        app.use(BASE_PATH, courseRoute)
        app.use('*', (req, res) => {
            res.status(404).json({ message: 'not found path' })
        })
        const SERVER_PORT = process.env.PORT || 5002
        httpServer = http.createServer(app);
        httpServer.listen(SERVER_PORT , () => {
            logger.info(`Web server listen on port : ${SERVER_PORT}`)
        })


    } catch (err) {
        logger.info(`Web server initial error :${err.stack}`);
    }

}

const close = async () => {
    await httpServer.close();
}

module.exports = {
    initialize,
    close
}
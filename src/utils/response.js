const { gSTATUS, gMESSAGE } = require('../utils/constants')

class BuildResponse {
    constructor(res) {
        this.res = res;
    }

    success(data) {
        return this.res.status(gSTATUS.SUCCESSFUL).json(data);
    }

    created(message) {
        return this.res.status(gSTATUS.CREATED).json({ message: message || gMESSAGE.CREATED });
    }

    notfound() {
        return this.res.status(gSTATUS.SUCCESSFUL).json({ message: gMESSAGE.DATA_NOT_FOUND });
    }

    fail(error) {
        return this.res.status(gSTATUS.FAIL).json({ error });
    }


}

module.exports = BuildResponse
const router = require("express").Router();

router.get("/", ( req, res ) => {
    // ルートのパス "/" が呼ばれたとき、index.ejs を返す
    res.render("./index.ejs");
});

module.exports = router;
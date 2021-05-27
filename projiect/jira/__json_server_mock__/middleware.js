module.exports = (req, res, next) => {
    if (req.method === "POST" && req.path === "/login") {
        console.log("req::",req.body);
        if (req.body.username === "liu" && req.body.password === "123456") {
            return res.status(200).json({
                user: {
                    token: '123'
                }
            })
        } else {
            return res.status(400).json({
                message: "用户名密码错误"
            })
        }
    }
}

const nodemailer = require("nodemailer");
console.log("fff")

module.exports = async function (req, res, next) {
  console.log(req.method)

  if (req.url.indexOf("/mail/send")!==-1 && req.method === 'POST') {
    console.log("pass 1st check")
    if (req.body.subject !== undefined
      && req.body.to !== undefined
      && req.body.text !== undefined) {
      console.log("pass 2nd check")
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'springsender127@gmail.com', // generated ethereal user
          pass: 'sqiojlqstvqgjkka', // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: 'hekinaport@mail.ru', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.text, // plain text body
        html: "<b>" + req.body.text + "</b>", // html body
      }).then(info => {
        console.log({ info })
      }).catch(console.error)
      next()
    } else {
      next()
    }
  } else {
    next()
  }

}

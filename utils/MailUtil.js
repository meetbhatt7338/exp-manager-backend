const mailer = require("nodemailer")

const sendMail = async (to , subject, text)=>{
    const transporter = mailer.createTransport({
        service :"gmail",
        auth:{
            user : 'meetbhatt.7338@gmail.com',
            pass : 'vvoffgmsneqozyvm'
        }
    })

    const mailOption ={
        from : 'meetbhatt.7338@gmail.com',
        to : to , 
        subject : subject,
        html : text,
        contentType: 'text/html',
    }

    const res = await transporter.sendMail(mailOption);
    // console.log(res)

}

// sendMail("bhattmeet9099@gmail.com" , "test" , '<h2>hiiuuu</h2><span style={background-color:"red"}>hello</span>');
  

module.exports = {
    sendMail
}
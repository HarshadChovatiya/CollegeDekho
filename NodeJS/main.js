//nodemailer

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service : 'gmail',
	auth : {
		user : 'dipesh.kohder@gmail.com',
		pass : 'Koh.der123'
	}
});

var mailOptions = {
	from : 'dipesh.kohder@gmail.com',
	to : 'harshadchovatiya10@gmail.com',
	subject : 'From Epsilon Cyber Security Pvt. Ltd.',
	text : 'Email is send with the help of NodeJS by Dipesh Darji'
}

transporter.sendMail(mailOptions,function(err,info){
	if(err){
		
		console.log(err);
	}
	else{
		console.log(info);
	}
})

module.exports = transporter;






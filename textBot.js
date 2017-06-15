const credentials = require('./creds.js');
const twilio = require('twilio')(credentials.sid, credentials.token);


twilio.messages.create({
	to: '+17025690333',
	from:'+17029049282',
	body: 'I know where you live'
}, (err,message) =>{
	if(err){
		console.log(err);
	}else{
		console.log(`${message.sid} Message Sent`)
	}
});

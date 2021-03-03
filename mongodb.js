var mongoose = require('mongoose')
mongoose.Promise= require('bluebird')
var bcrypt = require("bcryptjs")


mongoose.connect('mongodb+srv://pandey:aayu829@cluster0.n0hp2.mongodb.net/todos?retryWrites=true&w=majority');

var schema1 = new mongoose.Schema({
	 admin : String,
     text : String,
     completed : Boolean 
});

var schema2 = new mongoose.Schema({
	password : String,
	email: String
});

// schema2.pre("save", async function(next)  {

// 	if(this.isModified("password")){
// 		console.log(`the current password is ${this.password}`);
// 		this.password = await bcrypt.hash(this.password, 10);
// 		console.log(`the current password is ${this.password}`);
// 		// this.password = await bcrypt.compare(password, this.password);
// 		// console.log(`the current password is ${this.password}`);
// 	// 	userLogin.password = await bcrypt.compare(userLogin.password, this.password);
// 	// 	console.log(`the current password is ${userLogin.password}`);
// 	 }

	
// 	next();

	
// })


var Todos = mongoose.model('Todos', schema1);
var Accounts = mongoose.model('Accounts', schema2);

module.exports = {
	Todos,
	Accounts
}

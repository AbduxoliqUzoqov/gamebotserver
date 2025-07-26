const mongoose = require("mongoose");
const uri="mongodb+srv://uzoqov_3434:m2PUp1Sx2XATgLpo@cluster0.mbcvrwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
	};
	try {
		mongoose.connect(uri, connectionParams);
		console.log("MongoDb ulandi");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};

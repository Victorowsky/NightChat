const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { cors: true });
const port = process.env.PORT || 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const QRCode = require("qrcode");
const cookieParser = require("cookie-parser");
const path = require("path");
require("./passport");

app.use(cors(true));
app.set("trust proxy", 1);
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);

app.use(express.static("build"));

mongoose.set("useFindAndModify", false);
mongoose.connect(
	"mongodb+srv://admin2:JmHTrp09LkkiAIMm@cluster0.ktmcd.mongodb.net/WNR?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("DB CONNECTED");
});

app.get("/", (req, res) => {
	res.sendFile(path(__dirname + "/build/index.html"));
});

const UserSchema = require("./Schemas/UserSchema");

app.get("/getProfile", (req, res) => {
	if (req.session?.passport?.user) {
		UserSchema.findById(req.session.passport.user, (err, docs) => {
			res.json({ profile: docs });
		});
	} else {
		res.json({ profile: false });
	}
});

app.use(cookieParser());
// app.use(bodyParser());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	UserSchema.findById(id, function (err, user) {
		done(err, user);
	});
});

app.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile"] })
);

app.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect("/");
	}
);
app.get("/logout", (req, res) => {
	res.session = null;
	req.logOut();
	res.redirect("/");
});

const ChatSchema = require("./Schemas/ChatSchema");
const EventSchema = require("./Schemas/EventSchema");

io.on("connection", (client) => {
	client.on("sendMessage", ({ text, name, userType, date, image, _id }) => {
		const message = ChatSchema({
			name,
			message: text,
			userType,
			date,
			userImage: image,
			wroteBy: _id,
		});
		message.save((err, docs) => {
			if (err) return console.log(err);
			io.emit("newMessageAnswer", { docs });
		});
	});

	client.on("getMessages", () => {
		ChatSchema.find({}, (err, docs) => {
			if (err) return console.log(err);
			client.emit("getMessagesAnswer", { docs });
		});
	});

	client.on("getEvent", () => {
		EventSchema.findOne({}, (err, docs) => {
			if (err) return console.log(err);
			client.emit("getEventAnswer", { docs });
		});
	});

	client.on("setEventPlace", ({ place }) => {
		EventSchema.deleteMany({}, (err) => {
			if (err) return console.log(err);
		});
		const newEvent = EventSchema({
			name: place,
		});
		newEvent.save((err, docs) => {
			if (err) return console.log(err);
			io.emit("newEventAnswer", { docs });
			io.emit("eventMessageAnswer", { docs });
		});
	});

	client.on("createUserQRCode", (userID) => {
		QRCode.toDataURL(userID, { width: 300 }, function (err, url) {
			if (err) return console.log(err);
			client.emit("createUserQRCodeAnswer", url);
		});
	});

	// console.log("a user connected");
});

server.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

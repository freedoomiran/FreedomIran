app.use(express.json());
const userRoutes = require("../routes/users");

app.use("/api/users", userRoutes);const userRoutes = require("../routes/users");

app.use("/api/users", userRoutes);

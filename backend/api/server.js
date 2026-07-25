const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        project: "FreedomIran",
        version: "v0.1 Alpha",
        status: "running"
    });
});

app.get("/api/languages", (req, res) => {
    res.json({
        languages: [
            {
                code: "fa",
                name: "فارسی"
            },
            {
                code: "en",
                name: "English"
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`FreedomIran server running on port ${PORT}`);
});const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        project: "FreedomIran",
        version: "v0.1 Alpha",
        status: "running"
    });
});

app.get("/api/languages", (req, res) => {
    res.json({
        languages: [
            {
                code: "fa",
                name: "فارسی"
            },
            {
                code: "en",
                name: "English"
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`FreedomIran server running on port ${PORT}`);
});

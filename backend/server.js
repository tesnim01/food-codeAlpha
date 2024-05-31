import app from "./app.js";

const port = process.env.PORT || 8800; // Default port is 8800

app.listen(port, () => {
    console.log(`SERVER HAS STARTED AT PORT ${port}`);
});

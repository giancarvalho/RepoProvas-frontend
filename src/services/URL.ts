const URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://api-repoprovas-1.herokuapp.com";

export default URL;

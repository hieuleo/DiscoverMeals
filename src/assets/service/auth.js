export default function getToken ({username, password}){
    // let token = null;
    if ( username === "admin" && password === "admin") {
        return{
            id: 1,
            token: "locationJsonWebTokenFake",
            username: username,
            password: password,
        }
    }
    return null;
};
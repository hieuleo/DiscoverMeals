export default function getToken ({username, password}){
    // let token = null;
    const listUser = [
        {
            id: 1,
            token: "locationJsonWebTokenFake",
            username: "admin",
            password: "admin",
            name: "Root Admin",
            avatar: "https://t.xframe.io/000/044/130/44130.jpg?auto=format&fit=crop&q=80&ixlib=react-9.4.0&w=799",
        },
        {
            id: 2,
            token: "foifnohwvgnthrengvewryhuwimc322rgwrgwerg7we44werg",
            username: 'a',
            password: 'a',
            name: "Nguyen Van A",
            avatar: "https://t1.xframe.io/000/012/881/12881.jpg?auto=format&fit=crop&q=80&ixlib=react-9.4.0&w=1678",
        },
        {
            id: 3,
            token: "wergerwbeergve2fwfwef5w2fwefefw2efwe5fw2ef55v5e8gbrt8hty5yujne5ecfw",
            username: 'b',
            password: 'b',
            name: "Nguyen Thi B",
            avatar: "https://t6.xframe.io/000/023/906/23906.jpg?auto=format&fit=crop&q=80&ixlib=react-9.4.0&w=1678",
        },
        {
            id: 4,
            token: "fergerbhyjy5jr9yve8tgvegevtgegrtgewqwer4wb5yun3r5hetvgwr1fcq4edxqe2tv",
            username: 'c',
            password: 'c',
            name: "Nguyen Thi c",
            avatar: "https://t6.xframe.io/000/023/906/23906.jpg?auto=format&fit=crop&q=80&ixlib=react-9.4.0&w=1678",
        }
    ];

    const userInfo = listUser.find((user) => user.username === username && user.password === password);
    if ( userInfo && userInfo.hasOwnProperty('username') && userInfo.hasOwnProperty('password')){
        return userInfo;  
    }
    
    return null;
};
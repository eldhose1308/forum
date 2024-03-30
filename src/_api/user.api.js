const login = (data, config={}) => {
    const { setProgress, abortRequest } = config;

    const userData = {
        "status": "success",
        "data": {
            "user_id": 42,
            "user_email": "sd@oo.com",
            "preferences": {
                "mode" : "dark",
            },
            "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MiwiaWRlbnRpZmllciI6IlIwVndRVTVwWWl0UmJWZHRlV281Um5wTFRrSkZRVDA5OTIiLCJpYXQiOjE3MTE3ODkxNzEsImV4cCI6MTcxMTc5Mjc3MX0.nV1eR3F5Y8IjPO9tRYHWPdBtP2xIBhBn_87kogAccvU"
        },
        "message": "User registered Successfully"
    }
    let progress = 0;
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            progress = progress + 10
            setProgress && setProgress(progress)
            if (progress === 100) {
                clearInterval(intervalId);
                if(Math.floor(Math.random()*10)%2===0)
                    resolve(userData)
                else
                    reject('Byee')    
            }
        }, 100)
    })
}

export {
    login,
}



export default {
    login : user =>{
        // console.log(user);
        return fetch('/api/users/login',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : ""}};
        })
    },
    register : user =>{
        // console.log(user);
        return fetch('/api/users/register',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },
    logout : ()=>{
        return fetch('api/users/logout')
                .then(res => res.json())
                .then(data => data);
    },
    //this will sync our frontend and our backend. If we were already authenticated, that will remain even if we close the react acpp
    isAuthenticated : ()=>{
        return fetch('api/users/authenticated')
                .then(res=>{
                    console.log("this is the authenticated response", res)
                    if(res.status !== 401)
                        return res.json().then(data => data);
                    else
                        return { isAuthenticated : false, user : {username : ""}};
                });
    }

}
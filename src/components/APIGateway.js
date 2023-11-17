import React from 'react';
import Constants from './Constants.js';

class APIGateway extends React.Component{
    static AnalyzeSOLFile = async (file) => {
        try{
            const response = await fetch(Constants.DOMAIN_URL + "/api/audit",{
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": localStorage.getItem('token')
                },
                body: JSON.stringify({'file_name': file.file_name, 'file_content': file.file_content}),
            });
            alert("Triggered AnalyzeSOL");
            const data = await response.json();
            // audit response
            if (data.status === 201){  
                alert("Success AnalyzeSOL");     // success
                return await data.data;
            }
            else{
                return await null;
            }
        } catch (error){
            alert(error);
        }
    }

    static GetAuditHistory = async (search_param) => {
        try{
            const response = await fetch(Constants.DOMAIN_URL + `/api/audit-history?search=${search_param}`,{
                method: 'GET',
                headers: {
                    "Authorization": localStorage.getItem('token')
                },
            });
            alert("Triggered History");
            const data = await response.json();
            // audit response
            if (data.status === 200){     
                alert("Success History");  // success
                return await data.data;
            }
            else{
                return await null;
            }
        } catch (error){
            alert(error);
        }
    }

    static Login = async (user_name, password) => {
        try {
            const response = await fetch(Constants.DOMAIN_URL + "/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ 'user_name': user_name, 'password': password }),
            });
        
            // Handle the response
            // ...
            alert("Triggered Login");
            const data = await response.json();
    
            if (data.status === 201){
                alert("Success Login")
                localStorage.setItem('token', data.data.token);
                return await data.data;
            } else {
                return await null;
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    static Logout = async () => {
        try {
            localStorage.removeItem('token')
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

export default APIGateway;
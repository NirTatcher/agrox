
import React, { useEffect, useState } from 'react'
import './styles/user.css'



// (function () {
//     var cors_api_host = 'cors-anywhere.herokuapp.com';
//     var cors_api_url = 'https://' + cors_api_host + '/';
//     var slice = [].slice;
//     var origin = window.location.protocol + '//' + window.location.host;
//     var open = XMLHttpRequest.prototype.open;
//     XMLHttpRequest.prototype.open = function () {
//         var args = slice.call(arguments);
//         var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//         if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//             targetOrigin[1] !== cors_api_host) {
//             args[1] = cors_api_url + args[1];
//         }
//         return open.apply(this, args);
//     };
// })()

export default function Users() {
    const [shouldEdit, setEdit] = useState(false)
    // const $ = require("jquery")
    // $.DataTable = require('datatables.net')
    // $(document).ready(function () {
    //     $('#USERS').DataTable();
    // }); 
    const [isLoaded, setLoaded] = useState(false)
    const [items, setItems] = useState("")
    const el = useState("")
    const [user, setUser] = useState("")
    const [lastCommand, setLastCommand] = useState("")
    const [shouldModal, setShouldModal] = useState(false)
    const [username, setUsername] = useState("")
    const [lastname, setLastname] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    useEffect(async () => {
        


       


      
        // async function fetchData() {
        //     const response = await
        //         fetch("https://cors-anywhere.herokuapp.com/apidev.tendermarket.co.il/api/accounts/GetUserDetails/?Userid=10", {
        //             method: 'GET',

        //             headers: new Headers({
        //                 'Content-Type': 'application/json; charset=UTF-8',
        //                 'Accept': 'application/json'
        //             })
        //         }).then(res => {
        //             console.log(res);
        //             return res.json()
        //         }).then((result) => {
        //             setLoaded(true)
        //             setItems(result.Data)
        //             console.log(result.Data)
        //         },
        //             (error) => {
        //                 setLoaded(true)
        //                 console.log(error);
        //             }
        //         )
        // }
        // fetchData()
        // $('#USERS').DataTable();

        try {


            // fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://wikipedia.org')}`)
            //         .then(response => {
            //           if (response.ok) return response.json()
            //           throw new Error('Network response was not ok.')
            //         })
            //         .then(data => console.log(data.contents));
            fetch(`https://cors-anywhere.herokuapp.com/apidev.tendermarket.co.il/api/accounts/GetUserDetails/?Userid=10`, {
                method: 'GET',
                
                // credentials:'same-origin',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json',
                })
            }).then(res => {
                console.log(res);
                return res.json()
            }).then((result) => {
                setLoaded(true)
                console.log(result);
                setItems(result.Data)
                setUser(result.Data)
                setUsername(result.Data.Firstname)
                setLastname(result.Data.Lastname)
                setPhoneNumber(result.Data.Phonenumber)
                console.log(result)
            },
                (error) => {
                    setLoaded(true)
                    alert(error +"error when trying to fetch user")
                    setUser({
                        Firstname: "Nir",
                        Lastname: "Tatcher",
                        Phonenumber: "0526362615"
                    })
                    setUsername("Nir")
                    setLastname("Tatcher")
                    setPhoneNumber("0526362615")
                }
            )
        } catch (error) {
            console.log(error)
        }





        // $.ajax({
        //     type:'GET'
        //     ,url:'http://apidev.tendermarket.co.il/api/accounts/GetUserDetails/users*?Userid=10',
        //     dataType:'json',
        //     contentType:'application/x-www-form-urlencoded; charset=utf8;',
        //     headers: new Headers({ 'Content-Type': 'application/json; charset=UTF-8','Accept':'application/json', }),
        //     // data:user,
        //     success:function(result){
        //         console.log(result)
        //     }
        // })
        // $(document).ready(function () {
        //     $('#USERS').DataTable();
        // });   


    }, [])

    const uploadUser = () => {
        let userTemp = user
        userTemp["Userid"] = 10;
        try {
            fetch("https://cors-anywhere.herokuapp.com/apidev.tendermarket.co.il/api/accounts/PostUserDetails/", {
                method: 'POST',

                headers: new Headers({ 'Content-Type': 'application/json; charset=UTF-8', 'Accept': 'application/json' }),
 
                body: JSON.stringify(userTemp),

            }).then(res => {
                console.log(res);
                return res.json()
            }).then((result) => {
                //  setLoaded(true)
                //  setItems(result.items)
                alert(result +"Response")
            },
                (error) => {
                    setLoaded(true)
                    alert(error +"error when trying to update user")
                }
            )
        } catch (error) {
            console.log(error)
        }
        // $.ajax({
        //     type:'POST'
        //     ,url:'http://cors-anywhere.herokuapp.com/apidev.tendermarket.co.il/api/accounts/PostUserDetails',
        //     dataType:'json',
        //     contentType:'application/x-www-form-urlencoded; charset=utf8;',
        //     headers: new Headers({ 'Content-Type': 'application/json; charset=UTF-8','Accept':'application/json', }),
        //     data:JSON.stringify(user),
        //     success:function(result){
        //         console.log(result)
        //     }
        // })
    }
    return (
        <div className="Wrapper">
            <img id="writtenLogo" alt="WRITTENLOGO" src="/agroxlogowritten.png" />


            {/*PC TABLET TABLE*/}
            <table id="USERS" class="table table-hover" style={{ width: '95%' }}>
                <thead>
                    <tr className="table-primary">
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Phonenumber</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>



                    {shouldEdit ?
                        <tr className="table-info">

                            <td>

                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" placeholder={username === "" ? "First Name" : ""} aria-describedby="basic-addon1" />
                            </td>
                            <td>
                                <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" class="form-control" placeholder={lastname === "" ? "Last Name" : ""} aria-describedby="basic-addon1" />
                            </td>
                            <td>
                                <input value={phonenumber} onChange={(e) => e.target.value[e.target.value.length-1] >= 0 && e.target.value[e.target.value.length-1] <=9 ? setPhoneNumber(e.target.value) : ""} type="text" class="form-control" placeholder={phonenumber === "" ? "Phone Number" :""} aria-describedby="basic-addon1" />
                            </td>

                            <td>
                                <button onClick={() => {
                                    if (user.Firstname !== username || user.Lastname !== lastname || user.Phonenumber !== phonenumber) {
                                        if(username==="")
                                          {
                                              alert("First name is required!")
                                              return;
                                          }
                                          if(lastname==="")
                                          {
                                              alert("Last name is required!")
                                              return;
                                          }
                                          if(phonenumber===0)
                                          {
                                              alert("Phone number is required!")
                                              return;
                                          }
                                        if (window.confirm('Are you sure you want to save this changes?')) {
                                            setEdit(false)
                                            setLastCommand("V")
                                            setUser({Firstname:username,Lastname:lastname,Phonenumber:phonenumber})
                                        

                                        }
                                    }
                                    else {
                                        setEdit(false)
                                        setLastCommand("V")
                                    }


                                }} type="button" class="btn btn-success">V</button>
                                <button onClick={() => {
                                    if (user.Firstname !== username || user.Lastname !== lastname || user.Phonenumber !== phonenumber) {
                                        if (window.confirm('Are you sure you want to discard this changes?')) {
                                            setEdit(false)
                                            setLastCommand("X")
                                            

                                        }
                                    }
                                    else {
                                        setEdit(false)
                                        setLastCommand("X")
                                    }
                                }} type="button" class="btn btn-danger">X</button>
                            </td>
                        </tr>
                        : <tr className="table-info">
                            <td>{user.Firstname}</td>
                            <td>{user.Lastname}</td>
                            <td>{user.Phonenumber}</td>

                            <td>
                                <button onClick={() => setEdit(true)} type="button" class="btn btn-info">EDIT</button>
                            </td>
                        </tr>
                    }


                </tbody>


            </table>
            {/*MOBILE TABLE*/}

            <table id="USERS-Mobile" class="table table-hover" style={{ width: '95%' }}>
                <thead>
                    <tr style={{ display: 'flex', flexDirection: 'column' }} className="table-primary">
                        <th>Details</th>

                    </tr>
                </thead>
                
                <tbody>
                {shouldEdit ?
                        <div style={{ display: 'flex', flexDirection: 'column' }} >

                            <tr className="table-info">

                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" placeholder={username === "" ? "First Name" : ""} aria-describedby="basic-addon1" />
                            </tr>
                            <tr className="table-info">
                            <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" class="form-control" placeholder={lastname === "" ? "Last Name" : ""} aria-describedby="basic-addon1" />
                            </tr>
                            <tr className="table-info">
                            <input value={phonenumber} onChange={(e) => e.target.value[e.target.value.length-1] >= 0 && e.target.value[e.target.value.length-1] <=9 ? setPhoneNumber(e.target.value) : ""} type="text" class="form-control" placeholder={phonenumber === "" ? "Phone Number" :""} aria-describedby="basic-addon1" />
                            </tr>

                            <tr className="table-info">
                                <button onClick={() => {
                                          if (user.Firstname !== username || user.Lastname !== lastname || user.Phonenumber !== phonenumber) {
                                            if(username==="")
                                            {
                                                alert("First name is required!")
                                                return;
                                            }
                                            if(lastname==="")
                                            {
                                                alert("Last name is required!")
                                                return;
                                            }
                                            if(phonenumber===0)
                                            {
                                                alert("Phone number is required!")
                                                return;
                                            }
                                            if (window.confirm('Are you sure you want to save this changes?')) {
                                                setEdit(false)
                                                setLastCommand("V")
                                                setUser({Firstname:username,Lastname:lastname,Phonenumber:phonenumber})
                                            
    
                                            }
                                        }
                                        else {
                                            setEdit(false)
                                            setLastCommand("V")
                                        }
                                }} type="button" class="btn btn-success">V</button>
                                <button onClick={() => {
                                         if (user.Firstname !== username || user.Lastname !== lastname || user.Phonenumber !== phonenumber) {
                                            if (window.confirm('Are you sure you want to discard this changes?')) {
                                                setEdit(false)
                                                setLastCommand("X")
                                                
    
                                            }
                                        }
                                        else {
                                            setEdit(false)
                                            setLastCommand("X")
                                        }
                                }} type="button" class="btn btn-danger">X</button>
                            </tr>
                        </div>
                
                        : <div style={{ display: 'flex', flexDirection: 'column' }} className="table-info">

                            <tr className="table-info">{user.Firstname}</tr>
                            <tr className="table-info">{user.Lastname}</tr>
                            <tr className="table-info">{user.Phonenumber}</tr>

                            <tr className="table-info">
                                <button onClick={() => setEdit(true)} type="button" class="btn btn-info">EDIT</button>

                            </tr>
                        </div>
                    }

                </tbody>


            </table>
            <button style={{ alignSelf: 'center' }} onClick={() => uploadUser()} type="button" class="btn btn-primary">UPDATE DB</button>


        </div>
    )
}

// import React, { useState } from 'react'
// const Login = () => {
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')

//   const loginUser = (e) =>{
//         console.log("email",email);
//         console.log("password",password);
//   }
//     return (
//     <div><h1>Login</h1>

//         <div className="input" >
//             <input type="email"  placeholder='email'  onChange={(e)=>setEmail(e.target.value)}/>
//             <input type="password" placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
//             <button type='submit' onClick={loginUser}>Login</button>
//         </div>
//         </div>
//   )
// }

// export default Login




import React, { useState,useEffect } from 'react';
import BkPicture from '../img/login-img.svg'
import {auth,onAuthStateChanged,signInWithEmailAndPassword} from '../firebaseConfig.js'
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userNavigation = useNavigate()
    
 
    useEffect(()=>{
        const redirectionUser = onAuthStateChanged(auth,(user)=>{
            if(user){
                userNavigation('/profile')
            }
        })
        return ()=>{
            redirectionUser()
        }
    },[userNavigation])

    
    const loginUser = async(e) => {
        try {
            
        console.log("email",email);
        console.log("password",password);

        const userCredentials = await signInWithEmailAndPassword(auth,email,password)

        const user = userCredentials.user
        console.log("user",user)
        userNavigation('../profile');
        
        } catch (error) {
            console.log("error",error);
            alert(error)
        }
    }


    return (
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src={BkPicture} className="img-fluid" alt="Phone-svg" />
                </MDBCol>

                <MDBCol col='4' md='6'>


                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />


                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg" onClick={loginUser}>Sign in</MDBBtn>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Continue with facebook
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                        <MDBIcon fab icon="twitter" className="mx-2" />
                        Continue with twitter
                    </MDBBtn>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;
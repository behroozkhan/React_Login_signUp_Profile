import React from 'react';
import {auth,createUserWithEmailAndPassword, onAuthStateChanged} from '../firebaseConfig.js'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { useState,useEffect } from 'react';
import { doc, setDoc,db } from '../firebaseConfig.js';
import { useNavigate } from 'react-router-dom';



const Register = () => {
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [repeatPass,setRepeatPass] = useState('');
const userNavigation = useNavigate();

    useEffect(()=>{
        const redirectoinUser = onAuthStateChanged(auth,(user)=>{
            userNavigation('./profile');

            return()=>{redirectoinUser()
            }
        })
    })

const registerUser = async(e) => {
    try {

        
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
        const user = userCredentials.user;
        console.log(user);
        let userInfo = {
            name,
            email,
            uid: user.uid,
        }

        
        const UserRef = doc(db,"smit_classMates",user.uid)
        await setDoc(UserRef,userInfo)
        console.log("success User Register");
        
        
        console.log("user",user);
        console.log("userCredentials",userCredentials);
        console.log("email",email,'password',password);
    } catch (error) {
        console.log('error',error);
        alert(error)
    }

}



return (

    <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
            <MDBCardBody className='crad-body'>
                <MDBRow className='d-flex align-items-center'>
                    <MDBCol md='10' lg='6' className='input-fields order-2 order-lg-1 d-flex flex-column align-items-center'>

                        <h2 className="signup-text text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h2>

                        <div className="input-container d-flex flex-row align-items-center mb-4 ">
                            <MDBIcon fas icon="user me-3" size='lg' />
                            <MDBInput label='Your Name' id='form1' type='text' className='w-100'  onChange={(e)=> setName(e.target.value)}  />
                        </div>

                        <div className="input-container d-flex flex-row align-items-center mb-4">
                            <MDBIcon fas icon="envelope me-3" size='lg' />
                            <MDBInput label='Your Email' id='form2' type='email' onChange={(e)=> setEmail(e.target.value)}  />
                        </div>

                        <div className="input-container d-flex flex-row align-items-center mb-4">
                            <MDBIcon fas icon="lock me-3" size='lg' />
                            <MDBInput label='Password' id='form3' type='password' onChange={(e)=> setPassword(e.target.value)}  />
                        </div>

                        <div className="input-container d-flex flex-row align-items-center mb-4">
                            <MDBIcon fas icon="key me-3" size='lg' />
                            <MDBInput label='Repeat your password' id='form4' type='password' onChange={(e)=> setRepeatPass(e.target.value)}  />
                        </div>

                        <MDBBtn className='mb-4' size='lg' onClick={registerUser}>Register</MDBBtn>

                    </MDBCol>

                    <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                    </MDBCol>

                </MDBRow>
            </MDBCardBody>
        </MDBCard>

    </MDBContainer>
);
}

export default Register;


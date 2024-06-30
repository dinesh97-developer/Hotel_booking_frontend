import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


function App() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3" style={{color:"black"}}>Sign in with</p>

            <MDBBtn floating size='md' tag='a' href="https://www.facebook.com" className='me-2' style={{ color: '#3b5998' }}>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a' href="https://www.twitter.com" className='me-2' style={{ color: '#00acee' }}>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a' href="https://www.linkedin.com" className='me-2' style={{ color: '#0e76a8' }}>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0" style={{color:"black"}}>OR</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" required/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" required/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <button className="btn btn-primary mb-0 px-5" size='lg'>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-2" style={{color:"black"}}>Don't have an account?
            
               <a href='/login/:reg' className="link-danger">Register</a>
            </p>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;
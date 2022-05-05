import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import facebook from '../../../images/social/facebook.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    /**
     * same name a variable declare kora jaby na tar jonno user1,loading1 user kora hoyace
     */
    const [signInWithGithub] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }
    // error handle
    if (error || error1) {

        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    // loading handle
    if (loading || loading1) {
        return <p>Loading...</p>;
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div className='col-12 col-sm-12 col-md-6 mx-auto'>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-secondary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-secondary'></div>
            </div>
            {errorElement}
            <div>
                <button className='btn btn-info w-100 d-block mx-auto rounded-pill' onClick={() => signInWithGoogle()}>
                    <img width={35} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
            <div className='mt-4'>
                <button className='btn btn-info w-100 d-block mx-auto rounded-pill' onClick={() => signInWithFacebook()}><img width={35} src={facebook} alt="" /> Facebook Sign In
                </button>
            </div>

            <div className='mt-4'>
                <button className='btn btn-info w-100 d-block mx-auto rounded-pill' onClick={() => signInWithGithub()}><img width={35} src={github} alt="" /> Github Sign In</button>
            </div>

        </div>

    );
};

export default SocialLogin;
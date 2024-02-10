import React,{ useRef,useState } from 'react';

const AdminLogIn = () => {
    const [ showPass,setShowPass ] = useState(false);
    const [ userName,setUserName ] = useState('');
    const [ password,setPassword ] = useState('');
    const ref = useRef();

    const handleFocus = (e) => {
        e.target.previousElementSibling.classList.replace('top-2','-top-3');
    };

    const handleBlur = (e) => {
        if (password.length > 1) {
            e.target.previousElementSibling.classList.replace('-top-3','top-2',);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className='min-w-full min-h-[630px] flex justify-center items-center'>
            <form
                onSubmit={handleSubmit}
                className='p-4 border-2 border-slate-400 rounded-3xl min-h-[230px] min-w-[320px]'>
                <div className='mb-8 mt-4 relative w-full'>
                    <label
                        className=' absolute top-2 left-2  duration-300 rounded-lg px-1 pointer-events-none bg-slate-800'
                        htmlFor="username">User Name</label>
                    <input
                        name='userName'
                        value={userName}
                        ref={ref}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={e => setUserName(e.target.value)}
                        className='dark:bg-slate-800 w-full py-2 pl-2 rounded-lg'
                        type="text"
                    />
                </div>
                <div className='mb-8 relative w-full'>
                    <label className='absolute top-2 left-2 rounded-lg px-1 pointer-events-none bg-slate-800 duration-300 ' htmlFor="password">
                        Password
                    </label>
                    <input
                        ref={ref}
                        onChange={e => setPassword(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className='dark:bg-slate-800 w-full py-2 pl-2  rounded-lg'
                        type={showPass ? "text" : "password"}
                    />
                    <button
                        type='button'
                        onClick={() => setShowPass(!showPass)}
                        className='absolute bottom-2 right-2'>
                        {showPass ? 'hide' : 'show'}
                    </button>
                </div>
                <div className='relative w-full'>
                    <button
                        type='submit'
                        className='px-3 py-2 bg-slate-600 rounded-xl w-full'
                    >Log In</button>
                </div>
            </form>
        </div>
    );
};

export default AdminLogIn;
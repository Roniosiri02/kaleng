import { Outlet } from "react-router-dom"

const Profile = () => {
    return (
        <div id='Profile'>
            <main className="pt-[4px] bg-slate-200">
                <div className="relative w-full h-[400px] mb-6 mt-10 shadow-3xl">
                    <div className='absolute brightness-[.35] bg-celo bg-fixed w-full h-[400px]'></div>
                    <h1 className="xl:text-9xl right-0 left-0 mx-auto text-center absolute z-10 text-white pt-32 font-extrabold tracking-widest italic md:text-7xl text-4xl">Profile</h1>
                </div>
                <Outlet />
            </main>
        </div>
    )
}

export default Profile;
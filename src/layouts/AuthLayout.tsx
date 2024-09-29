// import useTokenStore from '@/store';
// import { Navigate, Outlet } from 'react-router-dom';

// const AuthLayout = () => {
//     const token = useTokenStore((state) => state.token);

//     if (token) {
//         return <Navigate to={'/dashboard/home'} replace />;
//     }

//     return (
//         <>
//             <Outlet />
//         </>
//     );
// };

// export default AuthLayout;

// import { ThemeProvider } from '@/components/ui/theme-provider';
// import useTokenStore from '@/store';
// import { Navigate, Outlet } from 'react-router-dom';
// // import { ThemeProvider } from '@/components/theme-provider';

// const AuthLayout = () => {
//     const token = useTokenStore((state) => state.token);

//     if (token) {
//         return <Navigate to={'/dashboard/home'} replace />;
//     }

//     return (
//         <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//             <Outlet />
//         </ThemeProvider>
//     );
// };

// export default AuthLayout;

import { ModeToggle } from '@/components/ui/mode-toggle';
import { ThemeProvider } from '@/components/ui/theme-provider';
import useTokenStore from '@/store';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
    const token = useTokenStore((state) => state.token);

    if (token) {
        return <Navigate to={'/dashboard/home'} replace />;
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex justify-end p-4">
                <ModeToggle /> {/* Add the ModeToggle component */}
            </div>
            <Outlet />
        </ThemeProvider>
    );
};

export default AuthLayout;
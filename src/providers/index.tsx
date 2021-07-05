import { ReactNode}  from "react";
import { AuthProvider } from './Auth';

type ProviderProps = {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
    return (
        <AuthProvider>{children}</AuthProvider>        
    );
}

export default Providers;

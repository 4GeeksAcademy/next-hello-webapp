import "@/styles/index.css";
import { Footer } from "@/components/global/footer";
import { Navbar } from "@/components/global/navbar";
import { ContextProvider } from "@/context/appContext";

export const metadata = {
    title: process.env.APP_NAME,
    description: process.env.APP_DESCRIPTION,
};

const Layout = ({ children }) => {
    return (
        <html lang="en" data-bs-theme={process.env.APP_DEFAULT_COLOR_MODE}>
            <body>
				<ContextProvider>
					<Navbar />
					{children}
					<Footer />
				</ContextProvider>
            </body>
        </html>
    );
};

export default Layout;

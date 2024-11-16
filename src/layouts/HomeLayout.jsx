import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">

            <header className="space-y-5">
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className="w-11/12 mx-auto my-5">
                <Navbar></Navbar>
            </nav>

            <main className="grid grid-cols-12 w-11/12 mx-auto gap-x-3">
                <aside className="col-span-3">
                    <LeftSidebar></LeftSidebar>
                </aside>
               
                <main className="col-span-6">
                     <Outlet></Outlet>
                     </main>
                
                <aside className="col-span-3">
                    <RightSidebar></RightSidebar>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayout;
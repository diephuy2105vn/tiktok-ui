import Home from "~/pages/Home";
import Following from "~/pages/Following";

//Public Routest
const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/following', component: Following
    }
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}
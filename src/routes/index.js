import { HeaderOnly } from "~/components/Layout";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Seach from "~/pages/Seach";
//Public Routest
const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/following', component: Following
    },
    {
        path: '/upload', component: Upload, layout: HeaderOnly
    },
    {
        path: '/seach', component: Seach, layout: null
    },
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}
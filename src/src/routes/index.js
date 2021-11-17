import { LastNews } from "../pages/LastNews";
import { News } from "../pages/News";
import { Routes as Switch, Route} from "react-router-dom";

export function Routes() {
    return  ( 
        <Switch>
            <Route path="/" element= {<LastNews />} />
            <Route path="/news/:slug" element= {<News />} />
        </Switch>
    );
}
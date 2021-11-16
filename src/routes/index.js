import { LastNews } from "../pages/LastNews";
import { News } from "../pages/News";
import { Routes as Switch, Route} from "react-router-dom";

export function Routes() {
    return  ( 
        <Switch>
            <Route path="/lastnews" element= {<LastNews />} />
            <Route path="/news" element= {<News />} />
        </Switch>
    );
}
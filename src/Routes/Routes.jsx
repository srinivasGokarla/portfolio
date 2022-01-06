import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Projects from "../Components/Projects";
import TechStack from "../Components/TechStack";
export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/TechStack">
                <TechStack />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
        </Switch>
    );
}

import { Route, Switch } from "react-router-dom";
import { AdminRoom } from "../pages/AdminRoom";
import { Home } from "../pages/Home/Home"
import { NewRoom } from "../pages/NewRoom";
import { Room } from "../pages/Room";

const Routes = () => {
  return (
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/rooms/new" component={NewRoom}/>
          <Route path="/rooms/:id" component={Room}/>     
          <Route path="/admin/rooms/:id" component={AdminRoom} />     
      </Switch>
  );
}

export default Routes;

import { Main } from "../components/main/Main";
import { BuyEnd } from "../components/main/BuyEnd";
import { AdminPanel } from "../components/appcontrol/AdminPanel";


const routes = {
  private: [
    {
      path: "/BuyEnd",
      name: "BuyEnd",
      component: BuyEnd
    },
    {
        path: "/AdminPanel",
        name: "AdminPanel",
        component: AdminPanel
    },


  ],
  public: [
    {
        path: "/",
        name: "home",
        component: Main
      }
  ]
}

export default routes
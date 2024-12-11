import PerfilComponent from "@/components/PerfilComponent";
import OrdersComponent from "@/components/OrdersComponent";

const Dashboard = () => {
  return (
    <main>
      <div>
        <h1>Dashboard</h1>
        <hr />
        <div className="wrapper1">
          <PerfilComponent />
          <OrdersComponent />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

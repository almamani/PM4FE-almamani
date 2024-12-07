import PerfilComponent from "@/components/PerfilComponent";
import OrdersComponent from "@/components/OrdersComponent";

const Dashboard = () => {
  return (
    <main>
      <div className="container">
        <h1>Dashboard</h1>
        <hr />
        <div className="mx-auto">
          <PerfilComponent />
          <OrdersComponent />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

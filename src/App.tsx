import { Layout } from "./infrastructure/ui/layout/Layout";
import { HomePage } from "./presentation/pages/home/HomePage";

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
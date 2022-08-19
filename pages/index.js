import Button from "../components/Button";
import App from "../layouts/App";

export default function Home() {
  return (
    <div className="space-x-2">
      tailwind CSS
    </div>
  )
}

Home.getLayout = (page) => <App children={page} />;

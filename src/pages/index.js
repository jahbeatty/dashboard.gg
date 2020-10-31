import Champions from "./champions";
import Link from "next/link";
import Header from "../components/Header";

const Index = () => (
  <>
    <Header />
    <h1>Index Page</h1>
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/champions">
          <a>Champions</a>
        </Link>
      </li>
    </ul>
  </>
);

export default Index;

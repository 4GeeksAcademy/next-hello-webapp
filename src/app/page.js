import Image from "next/image";
import {
  Button,
} from "@/components/bootstrap/client-bootstrap";

export const metadata = {
  title: process.env.APP_NAME +" | "+process.env.APP_DESCRIPTION,
};

const Home = () => {
  return (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
        <p>
			<Image  src="/img/rigo-baby.png" alt="A baby Rigo" width={200}
          height={200}
          priority />
      <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
          priority
        />
        </p>
        <Button variant="success">
			If you see this green button, bootstrap is working
        </Button>
	</div>
  );
}

export default Home
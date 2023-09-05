"use client";
import { useContext } from "react";
import { Context } from "@/context/appContext";
import Link from "next/link";
import { useParams } from 'next/navigation'
import {
    Button,
} from "@/components/bootstrap/client-bootstrap";

const Single = () => {
    const { store } = useContext(Context);
    const params = useParams();
    return (
        <div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.id].title}</h1>

			<hr className="my-4" />

			<Link href="/">
				<Button size="lg">
					Back home
				</Button>
			</Link>
		</div>
    )
};

export default Single;

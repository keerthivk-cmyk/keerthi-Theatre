import { JSX } from "react";

interface WelcomeProps {
name: string;
}
export default function Welcome({ name }: WelcomeProps): JSX.Element {
    return <p>Welcome, {name}! Enjoy the show 🎟️</p>;
}
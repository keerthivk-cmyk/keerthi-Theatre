import { JSX } from "react";

interface MovieProps {
title: string;
language: string;
rating: number;
}
export default function MovieInfo({ title, language, rating }:
    MovieProps): JSX.Element {
return (
<div>
<h3>{title}</h3>
<p>{language}</p>
<p>⭐ Rating: {rating}/5</p>
</div>
);
    }
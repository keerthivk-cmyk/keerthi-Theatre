import "./MovieInfo.css"
import { JSX } from "react";

interface MovieProps {
title: string;
language: string;
rating: number;
}
export default function MovieInfo({ title, language, rating }:
    MovieProps): JSX.Element {
return (
<div className="movie-card">
<h3 className="movie-title">{title}</h3>
<p className="movie-language">{language}</p>
<p className="movie-rating">⭐ Rating: {rating}/5</p>
</div>
);
    }
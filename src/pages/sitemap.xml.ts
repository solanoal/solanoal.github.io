import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
	const [posts, projects] = await Promise.all([
		getCollection("post"),
		getCollection("project"),
	]);
	const staticPages = Object.keys(import.meta.glob("./**/*.astro"))
		.filter((path) => !path.includes("["))
		.map((path) => path.slice(1).replace(/\.astro$/, "").replace(/\/index$/, "/"));
	const paths = [
		...staticPages,
		...posts.map((entry) => `/post/${entry.slug}`),
		...projects.map((entry) => `/project/${entry.slug}`),
	];
	const urls = [...new Set(paths)].sort().map((path) => {
		const url = new URL(path.endsWith("/") ? path : `${path}/`, site);
		const escaped = url.href
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;");
		return `  <url><loc>${escaped}</loc></url>`;
	});

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
		{ headers: { "Content-Type": "application/xml; charset=utf-8" } },
	);
};

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params);

	const blogArticles = [
		{
			id: '1',
			text: 'i am programming in typescript'
		},

		{
			id: '2',
			text: 'i am programming in python'
		},

		{
			id: '3',
			text: 'i am programming in swift'
		},

		{
			id: '4',
			text: 'i am programming in kotlin'
		},

		{
			id: 'i am writing SQL'
		}
	];

	const foundArticle = blogArticles.find((article) => article.id === params.articleId);

	if (foundArticle) {
		return {
			blogPost: foundArticle.text
		};
	} else {
		throw error(404, 'Article not found');
	}
};

const products = [
	{
		_id: '1',
		name: 'The Coding Interview Patterns',
		image: [
			'/image/book1_1.webp',
			'/image/book1_2.webp',
			'/image/book1_3.webp',
		],
		description:
			"Let's be honest. Coding interviews is hard, especially at big FAANG companies and unicorn startups. In our years of interviewing and being in the hiring committee at FAANG, we saw countless candidates, both new grad and experienced ones, fail phone screens and onsite coding interviews after multiple time trying. But you know what? Don't wish it was easier, wish you were better!\n\nSo how can you nail these interviews in LESS THAN THREE WEEKS? We're here to help! This guide will provide a structure preparation process. We point out which important patterns to know, which algorithms you can skip, and which areas to focus on. And YES! We cover difficult topics like recursion, backtracking, graphs, and dynamic programming.We walk you through step by step, including the thinking process, identifying the patterns, understanding how the patterns work, providing concrete examples with solutions, and even better providing a list of practice problems for you to work on.",
		category: 'Interview',
		regularprice: 0,
		price: 36.0,
		rating: 4.5,
		numReviews: 12,
		sold: 50,
	},
	{
		_id: '2',
		name: 'System Design cheatsheet',
		image: ['/image/book2_1.webp', '/image/book2_2.webp'],
		description:
			'Have no clue about system design interviews? Want to land a senior offer but get held back because of system design interviews? Or even worse, you failed system design interviews and still don\'t know how to improve your performance? Or simply just want to expand your knowledge to prepare for a system design interview coming up? \n\nThis cheatsheet is created by staff engineers who’ve been working at FAANG. It provides the perfect template to handle any system design problem and cover in depth a set of fundamental systems which will help you build a solid understanding of the most important principles behind each system.\n\nThis cheatsheet can become the perfect weapon for you to "cram" for the interviews or help start your journey preparing for system design interviews.',
		category: 'Interview',
		regularprice: 40.0,
		price: 36.0,
		rating: 3.5,
		numReviews: 150,
		sold: 560,
	},
	{
		_id: '3',
		name: 'Behavioral Interview Tips',
		image: ['/image/book3_1.webp'],
		description:
			"Many times people got down leveled from senior positions, or worse got rejected from their dream jobs NOT BECAUSE OF THEIR TECHNICAL KNOWLEDGE. It was how people perform on the BEHAVIORAL INTERVIEW.\n\nDon't let that happen to you! It's true that there is no right or wrong answer in the behavioral interview. But there are always NOT GOOD ENOUGH answeres for the level you're targeting. Whether you’re a software engineer or engineering manager, this guide will give you the right language and show you how to thoroughly prepare for behavioral and cultural questions at any tech companies.",
		category: 'Interview',
		regularprice: 35.0,
		price: 29.75,
		rating: 1.0,
		numReviews: 30,
		sold: 500,
	},
];

export default products;

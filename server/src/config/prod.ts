export const prodConfig = {
	PG_HOST: process.env.PG_HOST!,
	PG_PORT: 5432,
	PG_USER: process.env.PG_USER!,
	PG_PASSWORD: process.env.PG_PASSWORD!,
	PG_DATABASE: process.env.PG_DATABASE!,

	JWT_KEY: process.env.JWT_KEY!,
	AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME!,
	AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID!,
	AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY!,
	STRIPE_API_KEY: process.env.STRIPE_API_KEY!,
};

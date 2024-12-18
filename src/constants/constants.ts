// TODO: If constant depends on environment variable it's not a constant

export const jwtConstants = {
  secret: process.env.JWT_SECRET,
};

export const RABBITMQ_URL = process.env.RABBITMQ_URL;

export const swagger = {
  title: 'Vocal Studio',
  description: 'The Vocal Studio API description',
  version: 'v1',
  path: 'api/docs',
  specification: './swagger-spec.json',
};

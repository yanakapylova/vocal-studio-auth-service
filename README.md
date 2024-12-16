# Authentication Service

This project provides authentication functionality for the Vocal Studio application. It supports user login, registration, and token management. You can run the service either with its internal Docker Compose file or as part of a unified setup with other project services.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Docker
- Docker Compose

### Running the Service

#### Option 2: Using the Unified Docker Compose File (preferable)

1. Request the unified Docker Compose file from the application developer.

2. Use the unified Docker Compose file to run all services, including the authentication service, database, and RabbitMQ:
   ```bash
   docker-compose -f <unified-docker-compose-file>.yml up --build
   ```

3. The authentication service will start on port `3005` as part of the complete setup.

#### Option 2: Using the Internal Docker Compose File

1. Clone the repository:
   ```bash
   git clone https://github.com/yanakapylova/vocal-studio-auth-service
   cd https://github.com/yanakapylova/vocal-studio-auth-service
   ```

2. Set up RabbitMQ separately if it hasn’t been started as part of the central service setup. Run the following command to start RabbitMQ:
   ```bash
   docker run -d \
      --name rabbitmq \
      --network vocal-studio \
      -p 5672:5672 \
      -p 15672:15672 \
      -e RABBITMQ_DEFAULT_USER=guest \
      -e RABBITMQ_DEFAULT_PASS=guest \
      rabbitmq:management
   ```

3. Start the service using the internal Docker Compose file:
   ```bash
   docker-compose up --build
   ```

4. The service will start on port `3005`.

## Configuration

- **Port**: The service runs on port `3005` by default.
- **RabbitMQ**: Ensure RabbitMQ is set up using the command above or through the unified Docker Compose file.
- **Database**: The service connects to a remote database specified in the internal Docker Compose file or the unified configuration.

## Troubleshooting

- **Port Conflicts**: If port `3005` is already in use, update the port in the Docker Compose file.
- **RabbitMQ Issues**: Verify that RabbitMQ is running and accessible on `localhost:5672`.
- **Database Connectivity**: Ensure the database URL is correct and reachable from the service.

## Contact
For questions or issues, please contact the application developer or the team responsible for this project.

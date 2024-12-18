<!-- TODO: Lint the MarkDown -->
<!-- Recommend to install corresponding extension - https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint -->
<!-- It's very strict and will teach you MD best practices -->

# Authentication Service

This project provides authentication functionality for the Vocal Studio application. It supports user login, registration, and token management. You can run the service either with its internal Docker Compose file or as part of a unified setup with other project services.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Docker
- Docker Compose

### Running the Service

<!-- TODO: What if I'm the developer and want to run the service in development mode? -->
<!-- Because I see that your package provides "start:dev" script -->
<!-- Describe it here and running using Docker put in "### Running from container" section -->

1. Clone the repository:
   <!-- TODO: Fix `cd` mistake -->
   ```bash
   git clone https://github.com/yanakapylova/vocal-studio-auth-service
   cd https://github.com/yanakapylova/vocal-studio-auth-service
   ```

2. Ensure that the **authentication server** is started **after the general server**, as it depends on RabbitMQ and other resources configured by the general server.

3. Start the service using the Docker Compose file:
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
- **Database Connectivity**: Ensure the database URL is correct and reachable from the service.

## Contact
For questions or issues, please contact the application developer or the team responsible for this project.

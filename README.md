# nodejs-microservices (Main Repository)

**Description**:  
This repository serves as the umbrella project for managing multiple Node.js microservices. It may include shared configurations, documentation, deployment scripts, or Docker configurations that apply to all services. The repository can act as a parent repository for all microservices, but each service can have its own independent repository.

**Repository Name**: `nodejs-microservices`

**Contains**:
- API Gateway for routing requests to services.
- Docker Compose configurations for running services together.
- Documentation on the microservice architecture, CI/CD pipeline, and overall project overview.

---

**API Documentation**:  
For API documentation, refer to the [Postman Documentation](https://documenter.getpostman.com/view/13912490/2sAXxS8rZ5).

# user-service

**Description**:  
The `user-service` handles all user-related functionality, such as user registration, authentication, user profile management, and role-based access control. It typically includes features like login, registration, and user verification.

**Repository Name**: `user-service`

**Key Features**:
- User registration and login API endpoints.
- JWT-based authentication.
- Role and permission management.
- Token verification service.

**Endpoints**:
- `POST /auth/register`: Registers a new user.
- `POST /auth/login`: Authenticates a user and returns a token.
- `POST /auth/verifyToken`: Verifies the validity of a user token.

---

# brand-service

**Description**:  
The `brand-service` manages the CRUD operations for brands. It allows the creation, updating, retrieval, and deletion of brand-related information within your application. This service is particularly useful for managing product brands or business-related brands.

**Repository Name**: `brand-service`

**Key Features**:
- CRUD operations for managing brands.
- Integration with the API Gateway for access control and routing.

**Endpoints**:
- `GET /brands`: Fetches all brands.
- `POST /brands`: Creates a new brand.
- `GET /brands/:id`: Retrieves details of a specific brand.
- `PUT /brands/:id`: Updates an existing brand.
- `DELETE /brands/:id`: Deletes a brand.

---

# Structure

Each repository (e.g., `user-service`, `brand-service`) should follow a similar folder structure for consistency:

```bash
/src
  ├── controllers
  ├── routes
  ├── services
  └── app.js
/config
package.json


# Structure
https://documenter.getpostman.com/view/13912490/2sAXxS8rZ5
import{UserBody,ValidationError} from "../types/index"

// Simple email format check using a regex
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Takes the raw request body and returns a list of validation errors.
export function validateUserBody(body: unknown): ValidationError[] {
  const errors: ValidationError[] = []

  if (typeof body !== "object" || body === null) {
    errors.push({ field: "body", message: "Request body must be a JSON object" })
    return errors; 
  }

  const { name, email } = body as Partial<UserBody>

  //name validation
  if (!name) {
    errors.push({ field: "name", message: "Name is required" })
  } else if (typeof name !== "string") {
    errors.push({ field: "name", message: "Name must be a string" })
  } else if (name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" })
  } else if (name.trim().length > 50) {
    errors.push({ field: "name", message: "Name must not exceed 50 characters" })
  }

  // email validation
  if (!email) {
    errors.push({ field: "email", message: "Email is required" })
  } else if (typeof email !== "string") {
    errors.push({ field: "email", message: "Email must be a string" })
  } else if (!isValidEmail(email)) {
    errors.push({ field: "email", message: "Email format is invalid" })
  }

  return errors
}
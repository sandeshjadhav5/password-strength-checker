export function checkPasswordStrength(password: string): string {
  if (password.length < 8) {
    return "Weak";
  }
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  if (!regex.test(password)) {
    return "Medium";
  }

  return "Strong";
}

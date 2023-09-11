export function getServerAddressToConfigure() {
  const { SERVER_ADDRESS = null } = process.env;

  if (!SERVER_ADDRESS) {
    if (process.env.NODE_ENV?.toLowerCase().startsWith("prod")) {
      return "0.0.0.0";
    }

    return "localhost";
  }

  return SERVER_ADDRESS;
};